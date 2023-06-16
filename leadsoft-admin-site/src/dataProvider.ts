import jsonServerProvider from 'ra-data-json-server';

const URL = 'http://127.0.0.1:8000'

export const dataProvider = jsonServerProvider(
    URL
);
