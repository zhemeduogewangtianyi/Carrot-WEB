import React, {Component} from 'react';
import {HashRouter, Route} from "react-router-dom";
import {menus} from "../menu/menu";

class CarrotContent extends Component {

    render() {

        return (
            <HashRouter>

                {
                    menus.map((item,index) => {
                        return item.children
                            ?
                            item.children.map((item,index) => {
                                return (
                                    <div>
                                        <Route exact path={item.path} component={item.component} />
                                    </div>
                                )
                            })
                            :
                            (
                                <Route exact path={item.path} component={item.component} />
                            )
                    })
                }
            </HashRouter>
        )

    }

}

export default CarrotContent;