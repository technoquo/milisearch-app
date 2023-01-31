import './bootstrap';

import Alpine from 'alpinejs';
import search from './alpine/search';
import focus from '@alpinejs/focus'

window.Alpine = Alpine;
Alpine.data("search", search);
Alpine.plugin(focus);

Alpine.start();
