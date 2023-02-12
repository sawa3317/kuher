import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from "react";

import useAdCategoriesService from "../../../services/adCategoriesService";
import useAdService from '../../../services/adService';
import formErrors from "../../../services/formErrors";
import MyInput from '../../myInput/MyInput';

function AdAddForm() {
    const {getAdCategories} = useAdCategoriesService();
    const [categories, setCategories] = useState(null);
    const {postAd} = useAdService(null);

    

    useEffect(() => {
        getAdCategories()
        .then(categories => {
            setCategories(categories)
        });
    },[]);

    const onSubmit = (data) => {
        postAd(data);
    }
    
    return (
        <div className="container">
            <Formik
                initialValues={{
                    category: '',
                    name: '',
                    price: 0,
                    description: '',
                    city: ''
                }}
                validationSchema ={Yup.object({
                    category: Yup.string()
                        .required(formErrors.required),
                    name: Yup.string()
                        .required(formErrors.required)
                        .min(10, 'Не менее 10 символов'),
                    price: Yup.number(),
                    description: Yup.string()
                        .min(20, 'Не менее 20 символов'),
                    city: Yup.string()
                })}
                onSubmit = {data => onSubmit(data)}
            >
                <Form className='ad-add'>
                    <h2>Добавить новое объявление</h2>
                    <label htmlFor="category">Категория</label>
                    <Field
                        id="category"
                        name="category"
                        as="select"
                        >   
                        <option value="">Выберите категорию</option>
                        {categories?.map(({id, name}) => <option key={id} value={name}>{name}</option>)}
                
                    </Field>
                    <ErrorMessage component="div" className="error" name="category"/>
                    <MyInput
                        label="Цена"
                        id="price"
                        name="price"
                        type="number"
                    />
                    <MyInput
                        label="Название товара/услуги*"
                        id="name"
                        name="name"
                        type="text"
                    />
                    <label htmlFor="description">Описание</label>
                    <Field 
                        id="description"
                        name="description"
                        as="textarea"
                    />
                    <ErrorMessage component="div" className="error" name="text"/>
                    <input type="submit" />
                </Form>
                

            </Formik>
        </div>
        
    ) 
}

export default AdAddForm;