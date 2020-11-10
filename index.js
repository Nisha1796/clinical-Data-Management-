import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens/config/screens';
import {Colors} from './screens/config/theme';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        topBar: {
            title: {
                color: 'white',
            },
            background: {
                color: Colors.primaryColor,
            },
            visible: false,
        },
    });
    Navigation.setRoot({
        root: {
            stack: {
                id: 'Auth',
                options: {
                    statusBar: {
                        backgroundColor: 'black',
                    },
                    topBar: {
                        visible: false,
                    },
                },
                children: [
                    {
                        component: {
                            name: 'GetStarted',
                        },

                    },
                ],
            },
        },
    });
});


