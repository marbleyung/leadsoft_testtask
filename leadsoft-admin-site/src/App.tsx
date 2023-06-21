import { Admin, Resource, Show, SimpleShowLayout, RichTextField, ListGuesser, ShowGuesser } from 'react-admin';
import dataProvider from './dataProvider';

const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <RichTextField source="id" />
            <RichTextField source="url" />
        </SimpleShowLayout>
    </Show>
);


export const App = () => (

    <Admin
        dataProvider={dataProvider}
    >
        <Resource name="send-data" list={ListGuesser} show={ShowGuesser} />
    </Admin>
);
