from pydantic import BaseModel


class User(BaseModel):
    web_page_url: str
    end_user_id: str
