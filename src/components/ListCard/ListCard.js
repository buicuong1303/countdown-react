import React from 'react';
import Card from '../Card/Card';
import './ListCard.scss';

class ListCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataListCard: [
        {
          id: 1,
          imageUrl: 'https://dummyimage.com/600x400/000/fff',
          name: 'test1',
          quantity: 20,
          time: 5,
        },
        {
          id: 2,
          imageUrl: 'https://dummyimage.com/600x200/000/fff',
          name: 'test2',
          quantity: 30,
          time: 120,
        },
        {
          id: 3,
          imageUrl: 'https://dummyimage.com/200x400/000/fff',
          name: '1xddQuY3p163eRhQgRDqEs4N5NMyxUXQEbDEew6AZdLQ',
          quantity: 10,
          time: 120,
        },
        {
          id: 4,
          imageUrl: 'https://dummyimage.com/200x100/000/fff',
          name: 'test4',
          quantity: 50,
          time: 250,
        },
        {
          id: 5,
          imageUrl: 'https://dummyimage.com/200x200/000/fff',
          name:
            'Những chiếc máy ảnh bé xinh được chúng mình tự tay thiết kế và sản xuất, dựa trên những mẫu máy ảnh film trên thực tế',
          quantity: 40,
          time: 500,
        },
        // nếu như time > 60s thì hiện theo format (0 hrs 2 mins)
        // đơn vị của time là seconds, và nếu còn dưới 60s thì sẽ hiện theo format (59 seconds)
      ],
    };
  }
  render() {
    return (
      <div className="list-card">
        {this.state.dataListCard.map((item, idx) => (
          <Card key={item.id} dataItem={item} />
        ))}
      </div>
    );
  }
}

export default ListCard;
