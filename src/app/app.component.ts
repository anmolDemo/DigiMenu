import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digiMenu';
  imagesArray = [1, 2, 3, 4, 5];

  items = [
    {
      item_name: 'Chicken Biryani',
      item_description: 'Chicken Biryani Dish made of authentic spices filled with love',
      price: 200,
      warning: 'NA',
      preparation_time: '15 min',
      recommended: true,
      spice_level: 1,
      is_veg: false,
      image_url: '#',
      video_url: '#',
    },
    {
      item_name: 'Mutton Biryani',
      item_description: 'Mutton Biryani Dish made of authentic spices filled with love',
      price: 200,
      warning: 'NA',
      preparation_time: '15 min',
      recommended: true,
      spice_level: 1,
      is_veg: false,
      image_url: '',
      video_url: '',
    },
    {
      item_name: 'Galoti Kebab',
      item_description: 'Galoti kebab Dish made of authentic spices filled with love Garlic Bread Dish made of authentic spices filled with love',
      price: 200,
      warning: 'NA',
      preparation_time: '10 min',
      recommended: true,
      spicy: true,
      is_veg: true,
      image_url: '',
      video_url: '',
    },
    {
      item_name: 'Garlic Bread',
      item_description: 'Garlic Bread Dish made of authentic spices filled with love Garlic Bread Dish made of authentic spices filled with love',
      price: 200,
      warning: 'NA',
      preparation_time: '5 min',
      recommended: true,
      spicy: true,
      is_veg: true,
      image_url: '',
      video_url: '',
    },
  ];
}
