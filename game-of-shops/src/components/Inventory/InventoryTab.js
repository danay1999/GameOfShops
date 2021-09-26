import React from 'react';
import Apple from '../../images/Inventory/Apple.PNG';
import Beer from '../../images/Inventory/Beer.PNG'
import Bread1 from '../../images/Inventory/Bread1.PNG';
import Cake from '../../images/Inventory/Cake.PNG';
import Carrot from '../../images/Inventory/Carrot.PNG';
import Cheese from '../../images/Inventory/Cheese.PNG';
import Chicken from '../../images/Inventory/Chicken.PNG';
import './InventoryTab.css';

export default function InventoryTab() {

    const items= {
        item1: {
          name: "Apple",
          image: Apple,
          height: '50px',
          width: '50px',  
        },
        item2: {
          name: "Beer",
          image: Beer,
          height: '50px',
          width: '50px', 
        },
        item3: {
          name: "Bread",
          image: Bread1,
          height: '50px',
          width: '50px',
        },
        item4: {
          name: "Cake",
          image: Cake,
          height: '50px',
          width: '50px',
        },
        item5: {
          name: "Carrot",
          image: Carrot,
          height: '50px',
          width: '50px',
        },
        item6: {
          name: "Cheese",
          image: Cheese,
          height: '50px',
          width: '50px',
        },
        item7: {
          name: "Chicken",
          image: Chicken,
          height: '50px',
          width: '50px',
        },
      };

    return (
        <div className="tab">
            {Object.entries(items).map(([key, value]) => {
              return( 
                <div>
                  <span>
                    <img 
                      src={value.image} 
                      alt={value.name} 
                      width={value.width}
                      height={value.height} 
                    />
                  </span>
                  <p>{value.name}</p>
                </div>
              )
                
            })}
        </div>
    );
}