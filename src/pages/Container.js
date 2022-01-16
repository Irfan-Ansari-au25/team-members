import "./Home.css";
import { useSelector } from "react-redux";

import Table from "./Table";
const Container = (props) => {
  //   console.log(props);
  const addClickHandler = () => {
    props.onOpen(true);
  };

  const noOfmembers = useSelector((state) => {
    console.log("from container", state);
    const { member } = state;
    console.log("redux Store", [...member.allMemebrs]);
    return [...member.allMemebrs];
  });
  console.log(noOfmembers, "from COntainer");

  return (
    <>
      <div className='wrapper-section wf-section'>
        <div className='div-1'>
          <h1 className='heading-3'>Hi,</h1>
          <div className='text-block-2'>Welcome to TEAM MEMBER</div>
        </div>
        <div className='div-block-416'>
          <div className='form-block-2 w-form'>
            <form
              id='email-form-2'
              name='email-form-2'
              data-name='Email Form 2'
              method='get'
            >
              <select
                id='field'
                name='field'
                data-name='Field'
                className='select-field w-select'
              >
                <option value=''>Select one...</option>
                <option value='First'>First choice</option>
                <option value='Second'>Second choice</option>
                <option value='Third'>Third choice</option>
                <option value='Another option'>Another option</option>
              </select>
            </form>
          </div>
          <div className='btn'>
            <div className='text-block' onClick={addClickHandler}>
              Add Members +
            </div>
          </div>
        </div>
        <div className='div-block-415'></div>
        <div className='table-wrapper'>
          <div className='table-row head'>
            <div className='div-block-406'></div>
            <div className='table-box'>
              <div className='table-heading'>Name</div>
            </div>
            <div className='table-box'>
              <div className='table-heading'>Company</div>
            </div>
            <div className='table-box'>
              <div className='table-heading'>Notes</div>
            </div>
            <div className='table-box _11'>
              <div className='table-heading'>Last update</div>
            </div>
            <div className='table-box action'>
              <div className='table-heading'>Status</div>
            </div>
            <div className='table-box action'>
              <div className='table-heading'>Action</div>
            </div>
          </div>
          <div className='table-container'>
            <div className='table-data-wrapper'>
              <div className='scroll-container'>
                <div className='scroll-table-content'></div>
                {noOfmembers.map((member) => {
                  return (
                    <Table
                      key={member.id}
                      id={member.id}
                      name={member.name}
                      company={member.company}
                      notes={member.notes}
                      status={member.status}
                      lastUpdated={member.lastUpdated}
                    ></Table>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
