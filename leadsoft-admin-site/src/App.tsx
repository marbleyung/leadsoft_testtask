import { Admin, Resource, ListGuesser, Show, SimpleShowLayout, RichTextField } from 'react-admin';
import { dataProvider } from './dataProvider';

export const UserShow = () => (
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
    <Resource name="send-data" list={ListGuesser} show={UserShow} />
    </Admin>
);

    