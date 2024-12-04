import React, { useEffect } from 'react'
import { getFilmsData } from '../app/store/films/slice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import PageLayout from '../components/page-layout/PageLayout';

const MainPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const films = useAppSelector((state) => state.films.data);

    useEffect(()=>{
        dispatch(getFilmsData())
    },[])

    return (
        <PageLayout>
            <h1>Фильмы</h1>
            {
                films?.results?.map((film:any)=>( // @todo: type of film
                    <div key={film.id}>
                        {film.titleText.text}
                    </div>
                ))
            }
        </PageLayout>
    );
};

export default MainPage;