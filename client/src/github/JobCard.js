import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Modal } from 'react-bootstrap';

import basket from './basket.png';


function JobCard({ job }) {

    const [detailsModal, setDetailsModal] = useState(false);
    const [applyModal, setApplyModal] = useState(false);
    const [noUserModal, setNoUserModal] = useState(false);
    const [jobAlreadySaved, setJobAlreadySaved] = useState(false);
    const [jobSaved, setJobSaved] = useState(false);


    const cancelToken = axios.CancelToken.source();

    useEffect(() => {

        // check it the job already saved or not
        axios.get(`/user/basket/github/${job.id}`, { cancelToken: cancelToken.token })
                .then(res => {
                    // if res.data = true, change jobAlreadySaved's value
                    if(res.data === true)
                        setJobAlreadySaved(true);
                })
                .catch(err => {
                    // do nothing
                    if(axios.isCancel(err)) return;
                    return ;
                });

        return () => {
            cancelToken.cancel();
        }

    });
    

    // save the job
    const basketIt = () => {

        // save it as quickly as possible
        // if any error occurs, we'll revoke it
        setJobSaved(true);

        let jobInfo = {
            id: job.id,
            type: job.type,
            created_at: job.created_at,
            company: job.company,
            location: job.location,
            title: job.title,
            description: job.description,
            how_to_apply: job.how_to_apply,
            company_logo: job.company_logo
        };

        axios.post(`/user/basket/github/save/${job.id}`, jobInfo)
            .then(res => {
              if(res.data === 'No User') {
                setNoUserModal(true);
                setJobSaved(false);
              }

              // confirmed that job is saved
              if(res.data === 'Saved' || res.data === 'Updated') {
                setJobSaved(true);
              }
            })
            .catch(err => {
              console.log(err);
              setJobSaved(false);
            });
                
    }


    return (
        <div>    
            <div className="card my-3">
                <div className="card-body">
                    {/*<div className="d-flex justify-content-between">*/}
                    <div className="row">
                        {/* className="col" omit to make the align correct */}
                        <div className="">
                            <div className="card-title">
                                <button className="btn btn-link" onClick={() => setDetailsModal(!detailsModal)}><h5>{job.title}</h5></button>
                            </div>
                        </div>
                        <div className="col text-right">
                            <img className="img-fluid" src={job.company_logo} alt="company-logo" width="100" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span className="badge badge-secondary">{job.type}</span>
                        </div>
                        <div className="col">
                            <span><i className="fa fa-clock-o" aria-hidden="true"></i> {moment(job.created_at).fromNow()}</span>
                        </div>
                    </div>
                    
                    <div className="row mt-2">
                        <div className="col">
                            <span><i className="fa fa-briefcase" aria-hidden="true"></i> {job.company}</span>
                        </div>
                        <div className="col">
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i> {job.location}</span>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col">
                            <button className="btn btn-secondary btn-block" onClick={() => setApplyModal(!applyModal)}>
                                <i className="fa fa-question-circle" aria-hidden="true"></i> How to Apply
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary btn-block" onClick={basketIt} disabled={jobAlreadySaved || jobSaved}><img src={basket} alt="basket" width="20" /> Basket it! </button>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <Modal show={detailsModal} onHide={() => setDetailsModal(!detailsModal)} size="lg" animation={false} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Job Description
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ReactMarkdown source={job.description} escapeHtml={false}/>
                  </Modal.Body>
                  <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setDetailsModal(!detailsModal)} >Close</button>
                  </Modal.Footer>
                </Modal>
            </div>

            <div>
                <Modal show={applyModal} onHide={() => setApplyModal(!applyModal)} animation={false} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      How to Apply
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center" style={{ wordBreak: 'break-all' }}>
                    <ReactMarkdown source={job.how_to_apply} escapeHtml={false} linkTarget="_blank" />
                  </Modal.Body>
                </Modal>
            </div>

            <div>
                <Modal show={noUserModal} onHide={() => setNoUserModal(!noUserModal)} animation={false} centered>
                  <Modal.Body className="text-center">
                    <h3>Please login first</h3>
                  </Modal.Body>
                </Modal>
            </div>

        </div>
        
    );
}

export default JobCard;