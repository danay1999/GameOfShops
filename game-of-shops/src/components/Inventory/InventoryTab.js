import React from 'react';
import Apple from '../../images/Inventory/Apple.PNG';
import Beer from '../../images/Inventory/Beer.PNG'
import Bread1 from '../../images/Inventory/Bread1.PNG'

export default function InventoryTab() {

    const items= {
        item: {
          height: 1,
          width: 1,
          name: "beer",
          image: "../../images/Inventory/Apple.PNG"
        },
        item: {
          height: 1,
          width: 1,
          name: "beer",
          image: '../../images/Inventory/Apple.PNG'
        },
        item: {
          height: 1,
          width: 1,
          name: "beer",
          image: '../../images/Inventory/Apple.PNG'
        },
        // item: {
        //   height: 1,
        //   width: 1,
        // },
        // item: {
        //   height: 1,
        //   width: 1,
        // },
      };

    return (
        <div className="tab">
            {Object.keys(items).map(function(item) {
                <img 
                    src={item.image} 
                    // alt={item.name} 
                    // className={item.name} 
                />})}
        </div>
    );
}