import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectGreeting, fetchAsync, load} from "../../redux/reducers/greetingSlice";

export const Greeting = () => {
    const greeting = useSelector(selectGreeting);
    const dispatch = useDispatch();

    const onGreetingClicked = () => {
        dispatch(fetchAsync());
    };

    return (
        <div>
            <div>
                <span> 
                    {greeting} 
                </span>
            </div>
            <div>
                <button 
                aria-label="Decrement value"
                onClick={onGreetingClicked}>Greet</button>
            </div>
        </div>
    );
}