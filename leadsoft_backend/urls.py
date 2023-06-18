from fastapi import APIRouter
from models import User

'''
USERS_DICT is a var which is being used as a storage of EACH user's visited pages
USERS_DICT = {
    'user1': ('url1', 'url2', 'url3'),
    'user2': ('url2', 'url4'),
    'user3': ('url4'),
    }
'''
USERS_DICT = {}

'''
USERS is a var which is being used as a storage of ALL users visited pags
USERS = [
    {'user1': USERS_DICT['user1']},
    {'user2': USERS_DICT['user2']},
    {'user3': USERS_DICT['user3']},
'''
USERS = []

router = APIRouter()


@router.post('/fetch-data/')
async def fetch_data(user: User):
    user_id, user_url = user.end_user_id, user.web_page_url
    if not USERS_DICT.get(user_id):
        USERS_DICT.setdefault(user_id, set())
        USERS.append({'id': user_id, 'url': USERS_DICT[user_id]})

    USERS_DICT[user_id].add(user_url)

    return await send_user()


@router.get('/send-data/')
async def send_users():
    return USERS


@router.get('/send-data/{user_inner}')
async def send_user(user_inner: str = None):
    if not user_inner:
        return await send_users()
    user_data = {'id': user_inner, 'url': USERS_DICT[user_inner]}
    return user_data
