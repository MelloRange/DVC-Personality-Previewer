'use client';
import React, { useId } from 'react'
import AsyncSelect from 'react-select/async'

// temp props; change as needed
interface Props {
    url: string;
}

const DropDown = ({url}: Props) => {

    // fetch data from api
    const loadOptions = () => {
        return fetch(url).then(res => res.json());
    };

    return (
        <>
            <AsyncSelect
            cacheOptions
            defaultOptions
            loadOptions={loadOptions}
            getOptionValue={data => data.id}
            getOptionLabel={data => data.name}
            instanceId={useId()}
            />
        </>
    )
}

export default DropDown