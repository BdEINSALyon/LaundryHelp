import { Laundries } from '../collections/laundries.ts';

export function loadLaundries() {
  if (Laundries.find().count() === 0) {

    var laundries = [
      {'name': 'Laverie du B',
      'machines': ['Machine 1 - Miele 5105 10kg bleue',
      'Machine 2 - Miele 6065+',
      'Machine 3 - Miele 6065+',
      'Machine 4 - Miele 6065+',
      'Machine 5 - Miele 6065+',
      'Seche Linge 1 - Miele PT-7135C']
      },
      {'name': 'Laverie du D',
      'machines': ['Machine 1 - Miele 5105 10kg bleue',
      'Machine 2 - Miele 6065+',
      'Machine 3 - Miele 6065+',
      'Machine 4 - Miele 6065+',
      'Machine 5 - Miele 6065+',
      'Seche Linge 1 - Miele PT-7135C']
      },
      {'name': 'Laverie du G/J',
      'machines': ['Machine 1 - Miele 5105 10kg bleue',
      'Machine 2 - Miele 6065+',
      'Machine 3 - Miele 6065+',
      'Machine 4 - Miele 6065+',
      'Machine 5 - Miele 6065+',
      'Seche Linge 1 - Miele PT-7135C']
      }
    ];

    for (var i = 0; i < laundries.length; i++) {
      Laundries.insert(laundries[i]);
    }
  }
}
