from fastapi import FastAPI
from cors_modified import CORSMiddleware
from dotenv import load_dotenv
from os import getenv
from urls import router as router_urls

load_dotenv()


app = FastAPI()
router = router_urls
origins = getenv('ORIGINS').split(' ')
app.include_router(router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST", 'GET'],
    allow_headers=["*"],
    expose_headers=['X-Total-Count'],
    x_total_count='5',
)

