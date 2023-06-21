import asyncio
from fastapi import APIRouter, WebSocket
from models import User

'''
USERS_DICT is a global variable which is
being used as a storage of EACH user's visited pages
USERS_DICT = {
    'user1': ('url1', 'url2', 'url3'),
    'user2': ('url2', 'url4'),
    'user3': ('url4'),
    }
'''


USERS_DICT = {}
router = APIRouter()


@router.post('/fetch-data/')
async def fetch_data(user: User):
    user_id, user_url = user.end_user_id, user.web_page_url
    if not USERS_DICT.get(user_id):
        USERS_DICT.setdefault(user_id, list())

    if user_url not in USERS_DICT[user_id]:
        USERS_DICT[user_id].append(user_url)


@router.websocket('/ws/send-data/')
async def ws_send_users(websocket: WebSocket):
    await websocket.accept()
    while True:
        await websocket.send_json(USERS_DICT)
        await asyncio.sleep(0.25)


@router.websocket('/ws/send-data/{user_inner}/show/')
async def ws_send_user(websocket: WebSocket,
                       user_inner: str = None):
    await websocket.accept()
    while True:
        if not user_inner:
            return await ws_send_users(websocket)
        await websocket.send_json(USERS_DICT[user_inner])
        await asyncio.sleep(0.25)
