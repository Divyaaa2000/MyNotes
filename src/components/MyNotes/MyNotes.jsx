import React, { useState } from 'react';
import styles from './MyNotes.module.css';

const MyNotes = () => {
  const[text,SetNoteText]=useState('');
  const[textcount,SetTextCount]=useState(0);
  const maxChar=250;

  const handleTextChange=(e)=>{
    const text=e.target.value;

    if(text.length<=maxChar)
    {
      SetNoteText(text);
      SetTextCount(text.length);
    }
    else{
      alert('You have reached the maxlimit');
    }

  }

  return (
    <div className={`container mt-5 d-flex justify-content-center ${styles.container}`}>
      <form className={styles.myNotes}>
        <div className={styles.formGroup}>
          <label htmlFor="noteType" className={styles.formLabel}>Select Type of Note</label>
          <select id="noteType" className={`form-control ${styles.select}`}>
            <option value="">Choose...</option>
            <option value="holiday">Holiday</option>
            <option value="personal">Personal</option>
            <option value="example">Example</option>
          </select>
        </div>

        <div className={`${styles.formGroup} mt-3`}>
          <label htmlFor="exampleTextarea" className={styles.formLabel}>Create your Notes Here</label>
          <textarea className={`form-control ${styles.textarea}`}value={text} maxLength={maxChar} onChange={handleTextChange} id="exampleTextarea" rows="3"></textarea>
          <div><p>Character Count : {textcount}/{maxChar}</p></div>
          <button type="submit" className={`btn btn-primary mt-3 ${styles.notesButton}`}>
          Submit
        </button>
        </div>

       
      </form>
    </div>
  );
}

export default MyNotes;
