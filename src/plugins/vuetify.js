import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#2D3343',
            primaryLight: '#B2DFDB',
            primaryDark: '#00796B',
            textIcons: '#FFFFFF',
            primaryText: '#212121',
            secondaryText: '#212121',
            divider: '#BDBDBD',
            secondary: '#795548',
            secondaryLight: '#E9E3E1',
            secondaryDark: '#5D4037',
            accent: '#FF5722',
            success: '#4CC76E',
            error: '#C74C4C',
            info: '#0097A7',
            mred: '#BD5149',
            anchor: '#8c9eff',
            compb1: '#1373BD'
          }
        }
      }
});
