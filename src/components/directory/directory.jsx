import React, {Component} from 'react';
import MenuItem from "../menu-item/menu-item";
import './directory.scss';
class Directory extends Component {
    constructor() {
        super();

        this.state={
            section:[{
                title:"hats",
                imageUrl:"https://i.ibb.co/cvpntL1/hats.png",
                id:1
            },
                {
                    title:"jackets",
                    imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",
                    id:2
                },
                {
                    title:"sneakers",
                    imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",
                    id:3
                },
                {
                    title:"womens",
                    imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",
                    id:4,
                    size:"large"
                },
                {
                    title:"mens",
                    imageUrl:"https://i.ibb.co/R70vBrQ/mens.png",
                    id:5,
                    size: "large"

                }
                ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.section.map(({title,imageUrl,id,size})=>(
                        <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />

                    ))
                }
            </div>
        );
    }
}

export default Directory;