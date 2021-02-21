import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import {
    Radio,
    RadioGroup
} from '@chakra-ui/react';

import { TYPE_SET_VIEWPORT_RATIOS, THREE_ZERO, TWO_ONE, ONE_TWO, ZERO_THREE } from '../helpers/constants.js'
export const ViewportSizer = () => {
    const { data, status = TWO_ONE, error } = useSelector(state => state.displayLayoutReducer)
    const dispatch = useDispatch()

    function set_viewport_ratios(selected_value) {
        // alert("status " + status + "\n" + selected_value)
        dispatch({ type: TYPE_SET_VIEWPORT_RATIOS, status: selected_value })
    }
    return (
        <RadioGroup
            defaultValue={TWO_ONE}
            aria-label={`Select viewport sizes`}
            pt={2}
            onChange={(e) => set_viewport_ratios(e)}
        >
            <Radio value={THREE_ZERO}></Radio>
            <Radio value={TWO_ONE}></Radio>
            <Radio value={ONE_TWO}></Radio>
            <Radio value={ZERO_THREE}></Radio>
        </RadioGroup>
    );
};