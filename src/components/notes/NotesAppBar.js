import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {startSaveNote, startUpLoading} from '../../actions/notes';

export const NotesAppBar = () => {


    const dispatch = useDispatch();

    const {active:note} = useSelector(state=>state.notes);



    const handleSave = () => {

        dispatch(startSaveNote(note))
    };



    const handlePicClick = () => {
        document.querySelector('#fileSelector')
            .click()
    };



    const handleFileChange= (e) => {

        const file = e.target.files[0]
        console.log(file)
        if(file){
            dispatch(startUpLoading(file))
        }
    };



    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <input
                id='fileSelector'
                type="file"
                style={{display:'none'}}
                onChange={handleFileChange}
            />

            <div>
                <button 
                    className="btn"
                    onClick={handlePicClick}
                >
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
