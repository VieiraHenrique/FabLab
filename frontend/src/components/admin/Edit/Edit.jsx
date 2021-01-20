import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import { useLocation } from 'react-router-dom';
import { FormField } from "../../commons";


/**
 * This component allow admin users to edit items
 * like Machine, Products, ...
 * @returns {JSX.Element}
 */
export function Edit(props){

    // Variables
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem ] = useState({});
    const [isUpdated, setisUpdated ] = useState(false);
        // const [formValues, setformValues] = useState(''); TBD
    let params = useLocation().pathname;
    let splitParams = params.split('/');
        // let history = useHistory(); TBD
    let type = splitParams[3];
    let id = splitParams[4];

    // Get an item according to its ID (Machine, Products, ...)
    async function getItemById(type, id){
        try {
            await api.getById(`/${type}`, id)
            .then((data) => {
                setItem(data.data);     
                setIsLoaded(true);
                setisUpdated(false);         
            });
        } catch (error) {
            console.log(error);
        }
    }
   
    // Update an item according to its ID (Machine, Products, ...)
    async function updateItemFromId(){
        try{
            await api.updateById(`/${type}`, id, item)
                // .then((response) => {
                //     return (response.ok) && response.blob();
                // })
                // .then((blob) => {
                //     console.log(blob);
                // })
                // setisUpdated(true);
                // setIsLoaded(false);
                // history.push('/admin/management');
        } catch(error) {
            console.log(error);
        }
            //  finally {
            //     history.push('/admin/management');
            // }
    }
    
    // Check loading
    useEffect(() => {
        (!isLoaded) && getItemById(type,id);
    });

    // Define item display list
    let itemToDisplay = Object.entries(item).map((key)  => {
        return (
            <Fragment key={key[0]}>
                {(key[0][0] !== "_") && <FormField label={key[0]} value={key[1]} callback={(fieldValue) => setItem({...item, ...{[key[0]]: fieldValue} })} /> }
            </Fragment>
        )
    });

    // Conditional tests on item
    if(item == null) {
        return (
            <section className="text-center">
                <h1>Aucun élément à afficher</h1>
            </section>
        )
    } else if (isUpdated === true) {
        return (
            <section className="text-center">
                <h1>Edition</h1>
                <form onSubmit={updateItemFromId}> 
                    {itemToDisplay}
                    <FormField type="submit" label="Mettre a jour" />
                </form>
                <h2>Mise à jour effectuée</h2>
            </section>
        )
    } else {
        return (
            <section className="text-center">
                <h1>Edition</h1>
                <form className="edit-form" onSubmit={updateItemFromId}>
                    {itemToDisplay}
                    <FormField type="submit" label="Mise à jour" />
                </form>
            </section>
        )
    } 
}