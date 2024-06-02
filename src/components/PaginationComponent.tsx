import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {IPaginatedPage} from "../models/IPaginatedPage";

interface IProps {
    next: IPaginatedPage | null,
    prev: IPaginatedPage | null,
}

const PaginationComponent: FC<IProps> = ({next, prev}) => {

    const [query, setQuery] = useSearchParams({page: '1'})
    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...prev});
                break
            case 'next':
                setQuery({...next});
                break
        }
    }

    return (
        <div>
            <button onClick={() => {
                changePage('prev')
            }} disabled={!prev}>prev
            </button>
            <button onClick={() => {
                changePage('next')
            }} disabled={!next}>next
            </button>
        </div>
    );
};

export default PaginationComponent;