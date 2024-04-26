import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, CardBody, Col, Container, Row, UncontrolledAlert } from 'reactstrap';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';

// Import Content
import UiContent from '../../../Components/Common/UiContent';

//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';

// Import Code Components
import { DefaultAlertsExample, BorderlessExample, DismissingExample, LinkColorExample, LiveExample, OutlineAlertsExample, LeftBorderAlertsExample, LabelIconAlertsExample, TopBarAlertsExample, LabelIconArrowAlertsExample, RoundedLabelIconAlertsExample, AdditionalContentAlertsExample, SolidAlertsExample } from './UiAlertsCode';


const UiAlerts = () => {
    document.title = "Alerts | Insulation Products Corporation";
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid={true}>
                    <BreadCrumb title="Alerts" pageTitle="Base UI" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Default Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>Alert</code> tag to show a default alert.</p>
                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>
                                                <Alert className='shadow' color="primary">
                                                     Hi!  A simple <b>Primary alert</b> —check it out!
                                                </Alert>

                                                <h6>Secondary Alert</h6>
                                                <Alert className='shadow' color="secondary">
                                                     How are you!  A simple <b>secondary alert</b> —check it out!
                                                </Alert>

                                                <h6>Success Alert</h6>
                                                <Alert className='shadow' color="success">
                                                     Yey! Everything worked!  A simple <b>success alert</b> —check it out!
                                                </Alert>

                                                <h6>Danger Alert</h6>
                                                <Alert color="danger" className='mb-0 shadow'>
                                                     Something is very wrong!  A simple <b>danger alert</b> —check it out!
                                                </Alert>
                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Alert</h6>
                                                <Alert className='shadow' color="warning">
                                                     Uh oh, something went wrong  A simple <b>warning alert</b> —check it out!
                                                </Alert>

                                                <h6>Info Alert</h6>
                                                <Alert className='shadow' color="info">
                                                    Don't forget' it ! A simple <b>info alert</b> —check it out!
                                                </Alert>

                                                <h6>Light Alert</h6>
                                                <Alert className='shadow' color="light">
                                                    Mind Your Step! A simple <b>light alert</b> —check it out!
                                                </Alert>

                                                <h6>Dark Alert</h6>
                                                <Alert color="dark" className='mb-0 shadow'>
                                                    Did you know? A simple <b>dark alert</b> —check it out!
                                                </Alert>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: "352px" }}>
                                            <code>
                                                <DefaultAlertsExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Borderless Alerts" />

                                <CardBody>
                                    <p className="text-muted">Use the <code>border-0</code> class to set alert without border.</p>

                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>
                                                <Alert color="primary" className='shadow border-0'>
                                                     Hi!  A simple <b>Primary alert</b> —check it out!
                                                </Alert>

                                                <h6>Secondary Alert</h6>
                                                <Alert color="secondary" className='shadow border-0'>
                                                     How are you!  A simple <b>secondary alert</b> —check it out!
                                                </Alert>

                                                <h6>Success Alert</h6>
                                                <Alert color="success" className='shadow border-0'>
                                                     Yey! Everything worked!  A simple <b>success alert</b> —check it out!
                                                </Alert>

                                                <h6>Danger Alert</h6>
                                                <Alert color="danger" className='shadow border-0 mb-xl-0'>
                                                     Something is very wrong!  A simple danger alert—check it out!
                                                </Alert>

                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Alert</h6>
                                                <Alert color="warning" className='shadow border-0'>
                                                     Uh oh, something went wrong  A simple <b>warning alert</b> —check it out!
                                                </Alert>

                                                <h6>Info Alert</h6>
                                                <Alert color="info" className='shadow border-0'>
                                                    Don't forget' it ! A simple <b>info alert</b> —check it out!
                                                </Alert>

                                                <h6>Light Alert</h6>
                                                <Alert color="light" className='shadow border-0 bg-light'>
                                                    Mind Your Step! A simple <b>light alert</b> —check it out!
                                                </Alert>

                                                <h6>Dark Alert</h6>
                                                <Alert color="dark" className='shadow border-0 mb-0'>
                                                    Did you know? A simple <b>dark alert</b> —check it out!
                                                </Alert>

                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: "352px" }}>
                                            <code>
                                                <BorderlessExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Dismissing Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>UncontrolledAlert</code> tag to add dismissing button to the alert.
                                    </p>
                                    <div className="live-preview">

                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>
                                                <UncontrolledAlert className='shadow' color="primary">
                                                     Hi!  A simple <b>Dismissible primary Alert </b> — check it out!
                                                </UncontrolledAlert>

                                                <h6>Secondary Alert</h6>
                                                <UncontrolledAlert className='shadow' color="secondary">
                                                     How are you!  A simple <b>Dismissible secondary alert</b> —check it out!
                                                </UncontrolledAlert>

                                                <h6>Success Alert</h6>
                                                <UncontrolledAlert className='shadow' color="success">
                                                    Right Way ! A simple <b>Dismissible success alert</b> —check it out!
                                                </UncontrolledAlert>

                                                <h6>Danger Alert</h6>
                                                <UncontrolledAlert color="danger" className="mb-xl-0 shadow">
                                                     Something is very wrong!  A simple <b>Dismissible danger alert</b> —check it out!
                                                </UncontrolledAlert>
                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Alert</h6>
                                                <UncontrolledAlert className='shadow' color="warning">
                                                    Welcome Back! A simple <b>Dismissible warning alert</b> —check it out!
                                                </UncontrolledAlert>

                                                <h6>Info Alert</h6>
                                                <UncontrolledAlert className='shadow' color="info">
                                                    Don't forget' it ! A simple <b>Dismissible info alert</b> —check it out!
                                                </UncontrolledAlert>

                                                <h6>Light Alert</h6>
                                                <UncontrolledAlert className='shadow' color="light">
                                                    Mind Your Step! A simple <b>Dismissible light alert</b> —check it out!
                                                </UncontrolledAlert>

                                                <h6>Dark Alert</h6>
                                                <UncontrolledAlert color="dark" className="mb-0 shadow">
                                                    Did you know? A simple <b>Dismissible dark alert</b> —check it out!
                                                </UncontrolledAlert>

                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: "352px" }}>
                                            <code>
                                                <DismissingExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Link Color Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>alert-link</code> class at &lt;a&gt; tag to show matching colored links within the given alert.</p>

                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>

                                                <Alert className='shadow' color="primary">
                                                    A simple Primary alert with <Link to="#" className="alert-link">an example
                                                        link</Link>. Give it a click if you like.
                                                </Alert>

                                                <h6>Secondary Alert</h6>
                                                <Alert className='shadow' color="secondary">
                                                    A simple Secondary alert with <Link to="#" className="alert-link">an example
                                                        link</Link>.  Give it a click if you like.
                                                </Alert>

                                                <h6>Success Alert</h6>
                                                <Alert className='shadow' color="success">
                                                    A simple Success alert with <Link to="#" className="alert-link">an example
                                                        link</Link>. Give it a click if you like.
                                                </Alert>

                                                <h6>Danger Alert</h6>
                                                <Alert color="danger" className="mb-xl-0 shadow">
                                                    A simple Danger alert with <Link to="#" className="alert-link">an example
                                                        link</Link>. Give it a click if you like.
                                                </Alert>
                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Alert</h6>
                                                <Alert className='shadow' color="warning">
                                                    A simple Warning alert with <Link to="#" className="alert-link">an example
                                                        link</Link>. Give  it a click if you like.
                                                </Alert>

                                                <h6>Info Alert</h6>
                                                <Alert className='shadow' color="info">
                                                    A simple Info alert with <Link to="#" className="alert-link">an example
                                                        link</Link>. Give it  a click if you like.
                                                </Alert>

                                                <h6>Light Alert</h6>
                                                <Alert className='shadow' color="light">
                                                    A simple Light alert with <Link to="#" className="alert-link">an example
                                                        link</Link>. Give it a click if you like.
                                                </Alert>

                                                <h6>Dark Alert</h6>
                                                <Alert color="dark" className="mb-0 shadow">
                                                    A simple Dark alert with <Link to="#" className="alert-link">an example
                                                        link</Link>. Give it a click if you like.
                                                </Alert>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup lang-jsx" style={{ maxHeight: "260px" }}>
                                            <code>
                                                <LinkColorExample />
                                            </code>
                                        </pre>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Live Alert Example" />
                                <CardBody>
                                    <p className="text-muted">Click the Show live alert button to show an alert on button click.</p>
                                    <div className="live-preview">
                                        <div id="liveAlertPlaceholder">
                                            <Alert color="success" isOpen={show} toggle={() => setShow(false)}>
                                                Nice, you triggered this alert message!
                                            </Alert>
                                            <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={() => setShow(true)}>Show live alert</button>
                                        </div>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup language-jsx" style={{ maxHeight: "260px" }}>
                                            <code>
                                                <LiveExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Outline Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>border-2 bg-body-secondary</code>  class to set an alert with outline.</p>

                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Outline Alert</h6>

                                                <UncontrolledAlert color="primary" className="shadow border-2 bg-body-secondary">
                                                     Hi!  - Outline <b>primary alert</b> example
                                                </UncontrolledAlert>

                                                <h6>Secondary Outline Alert</h6>
                                                <UncontrolledAlert color="secondary" className="shadow border-2 bg-body-secondary">
                                                     How are you!  - Outline <b>secondary alert</b> example
                                                </UncontrolledAlert>

                                                <h6>Success Outline Alert</h6>
                                                <UncontrolledAlert color="success" className="shadow border-2 bg-body-secondary">
                                                     Yey! Everything worked!  - Outline <b>success alert</b> example
                                                </UncontrolledAlert>

                                                <h6>Danger Outline Alert</h6>
                                                <UncontrolledAlert color="danger" className="shadow border-2 bg-body-secondary mb-xl-0">
                                                     Something is very wrong!  - Outline <b>danger alert</b> example
                                                </UncontrolledAlert>

                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Outline Alert</h6>
                                                <UncontrolledAlert color="warning" className="shadow border-2 bg-body-secondary">
                                                     Uh oh, something went wrong!  - Outline <b>warning alert</b> example
                                                </UncontrolledAlert>

                                                <h6>Info Outline Alert</h6>
                                                <UncontrolledAlert color="info" className="shadow border-2 bg-body-secondary">
                                                    Don't forget' it ! - Outline <b>info alert</b> example
                                                </UncontrolledAlert>

                                                <h6>Dark Alert</h6>
                                                <UncontrolledAlert color="dark" className="shadow border-2 bg-body-secondary mb-0">
                                                    Did you know? - Outline <b>dark alert</b> example
                                                </UncontrolledAlert>

                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup lang-jsx" style={{ maxHeight: "260px" }}>
                                            <code>
                                                <OutlineAlertsExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Left Border Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>alert-border-left </code> class to set an alert with the left border.</p>

                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>
                                                <UncontrolledAlert color="primary" className="alert-border-left shadow">
                                                    <i className="ri-user-smile-line me-3 align-middle fs-16"></i>Primary - Left border alert
                                                </UncontrolledAlert>

                                                <h6>Secondary Alert</h6>
                                                <UncontrolledAlert color="secondary" className="alert-border-left shadow">
                                                    <i className="ri-check-double-line me-3 align-middle fs-16"></i>Secondary - Left border alert
                                                </UncontrolledAlert>

                                                <h6>Success Alert</h6>
                                                <UncontrolledAlert color="success" className="alert-border-left shadow">
                                                    <i className="ri-notification-off-line me-3 align-middle fs-16"></i>Success - Left border alert
                                                </UncontrolledAlert>

                                                <h6>Danger Alert</h6>
                                                <UncontrolledAlert color="danger" className="alert-border-left shadow mb-xl-0">
                                                    <i className="ri-error-warning-line me-3 align-middle fs-16"></i>Danger - Left border alert
                                                </UncontrolledAlert>

                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Alert</h6>
                                                <UncontrolledAlert color="warning" className="alert-border-left shadow">
                                                    <i className="ri-alert-line me-3 align-middle fs-16"></i>Warning - Left border alert
                                                </UncontrolledAlert>

                                                <h6>Info Alert</h6>
                                                <UncontrolledAlert color="info" className="alert-border-left shadow">
                                                    <i className="ri-airplay-line me-3 align-middle fs-16"></i>Info - Left border alert
                                                </UncontrolledAlert>

                                                <h6>Light Alert</h6>
                                                <UncontrolledAlert color="light" className="alert-border-left shadow">
                                                    <i className="ri-mail-line me-3 align-middle fs-16"></i>Light - Left border alert
                                                </UncontrolledAlert>

                                                <h6>Dark Alert</h6>
                                                <UncontrolledAlert color="dark" className="alert-border-left shadow mb-0">
                                                    <i className="ri-refresh-line me-3  align-middle fs-16"></i>Dark - Left border alert
                                                </UncontrolledAlert>

                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup lang-jsx" style={{ maxHeight: "260px" }}>
                                            <code>
                                                <LeftBorderAlertsExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Label Icon Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>alert-label-icon</code> class to set an alert with a label icon.</p>
                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>
                                                <UncontrolledAlert color="primary" className="bg-primary text-white alert-label-icon shadow" closeClassName="btn-close-white">
                                                    <i className="ri-user-smile-line label-icon"></i>Primary -Label icon alert
                                                </UncontrolledAlert>

                                                <h6>Secondary Alert</h6>
                                                <UncontrolledAlert color="secondary" className="bg-secondary text-white alert-label-icon shadow" closeClassName="btn-close-white" >
                                                    <i className="ri-check-double-line label-icon"></i>Secondary - Label icon alert
                                                </UncontrolledAlert>

                                                <h6>Success Alert</h6>
                                                <UncontrolledAlert color="success" className="bg-success text-white alert-label-icon shadow" closeClassName="btn-close-white">
                                                    <i className="ri-notification-off-line label-icon"></i>Success - Label icon alert
                                                </UncontrolledAlert>

                                                <h6>Danger Alert</h6>
                                                <UncontrolledAlert color="danger" className="bg-danger text-white alert-label-icon shadow mb-xl-0" closeClassName="btn-close-white">
                                                    <i className="ri-error-warning-line label-icon"></i>Danger - Label icon alert
                                                </UncontrolledAlert>

                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Alert</h6>
                                                <UncontrolledAlert color="warning" className="bg-warning text-white alert-label-icon shadow" closeClassName="btn-close-white">
                                                    <i className="ri-alert-line label-icon"></i>warning - Label icon alert
                                                </UncontrolledAlert>

                                                <h6>Info Alert</h6>
                                                <UncontrolledAlert color="info" className="bg-info text-white alert-label-icon shadow" closeClassName="btn-close-white">
                                                    <i className="ri-airplay-line label-icon"></i>Info - Label icon alert
                                                </UncontrolledAlert>

                                                <h6>Light Alert</h6>
                                                <UncontrolledAlert color="light" className="bg-light text-body alert-label-icon shadow" closeClassName="btn-close-white">
                                                    <i className="ri-mail-line label-icon"></i>Light - Label icon alert
                                                </UncontrolledAlert>

                                                <h6>Dark Alert</h6>
                                                <UncontrolledAlert color="dark" className="bg-dark text-white alert-label-icon shadow mb-0" closeClassName="btn-close-white">
                                                    <i className="ri-refresh-line label-icon"></i>Dark - Label icon alert
                                                </UncontrolledAlert>

                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup lang-jsx" style={{ maxHeight: "260px" }}>
                                            <code>
                                                <LabelIconAlertsExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Additional Content Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>alert-additional</code> class and Use the <code>alert-</code> class to HTML elements like headings, paragraphs, dividers etc.</p>
                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>

                                                <UncontrolledAlert color="primary" className="alert-additional">
                                                    <div className="alert-body">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <i className="ri-error-warning-line fs-16 align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h5 className="alert-heading">Well done !</h5>
                                                                <p className="mb-0">Aww yeah, you successfully read this important alert message. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="alert-content">
                                                        <p className="mb-0">Whenever you need to, be sure to use margin
                                                            utilities to keep things nice and tidy.</p>
                                                    </div>
                                                </UncontrolledAlert>

                                                <h6>Danger Alert</h6>
                                                <UncontrolledAlert color="danger" className="alert-additional mb-xl-0">
                                                    <div className="alert-body">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <i className="ri-alert-line fs-16 align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h5 className="alert-heading">Something is very wrong!</h5>
                                                                <p className="mb-0">Change a few things up and try submitting again.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="alert-content">
                                                        <p className="mb-0">Whenever you need to, be sure to use margin
                                                            utilities to keep things nice and tidy.</p>
                                                    </div>
                                                </UncontrolledAlert>
                                            </Col>

                                            <Col xl={6}>

                                                <h6>Success Alert</h6>
                                                <UncontrolledAlert color="success" className="alert-additional">
                                                    <div className="alert-body">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <i className="ri-notification-off-line fs-16 align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h5 className="alert-heading">Yey! Everything worked!</h5>
                                                                <p className="mb-0">This alert needs your attention, but it"s not super important.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="alert-content">
                                                        <p className="mb-0">Whenever you need to, be sure to use margin
                                                            utilities to keep things nice and tidy.</p>
                                                    </div>
                                                </UncontrolledAlert>

                                                <h6>Warning Alert</h6>
                                                <UncontrolledAlert color="warning" className="alert-additional mb-0">
                                                    <div className="alert-body">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <i className="ri-alert-line fs-16 align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h5 className="alert-heading">Uh oh, something went wrong!</h5>
                                                                <p className="mb-0">Better check yourself, you're not looking too good.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="alert-content">
                                                        <p className="mb-0">Whenever you need to, be sure to use margin
                                                            utilities to keep things nice and tidy.</p>
                                                    </div>
                                                </UncontrolledAlert>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup lang-jsx" style={{ maxHeight: "260px" }}>
                                            <code>
                                                <AdditionalContentAlertsExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Top Border with Outline Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>alert-top-border</code> class to set an alert with the top border and outline.</p>
                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>
                                                <UncontrolledAlert color="primary" className="alert-top-border">
                                                    <i className="ri-user-smile-line me-3 align-middle fs-16 text-primary"></i>Primary
                                                    - Top border alert
                                                </UncontrolledAlert>

                                                <h6>Secondary Alert</h6>
                                                <UncontrolledAlert color="secondary" className="alert-top-border">
                                                    <i className="ri-check-double-line me-3 align-middle fs-16 text-secondary"></i>Secondary
                                                    - Top border alert
                                                </UncontrolledAlert>

                                                <h6>Success Alert</h6>
                                                <UncontrolledAlert color="success" className="alert-top-border">
                                                    <i className="ri-notification-off-line me-3 align-middle fs-16 text-success"></i>Success
                                                    - Top border alert
                                                </UncontrolledAlert>

                                                <h6>Danger Alert</h6>
                                                <UncontrolledAlert color="danger" className="alert-top-border mb-xl-0">
                                                    <i className="ri-error-warning-line me-3 align-middle fs-16 text-danger "></i>Danger
                                                    - Top border alert
                                                </UncontrolledAlert>

                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Alert</h6>
                                                <UncontrolledAlert color="warning" className="alert-top-border">
                                                    <i className="ri-alert-line me-3 align-middle fs-16 text-warning"></i>Warning
                                                    - Top border alert
                                                </UncontrolledAlert>

                                                <h6>Info Alert</h6>
                                                <UncontrolledAlert color="info" className="alert-top-border">
                                                    <i className="ri-airplay-line me-3 align-middle fs-16 text-info"></i>Info
                                                    - Top border alert
                                                </UncontrolledAlert>

                                                <h6>Light Alert</h6>
                                                <UncontrolledAlert color="light" className="alert-top-border">
                                                    <i className="ri-mail-line me-3 align-middle fs-16"></i>Light
                                                    - Top border alert
                                                </UncontrolledAlert>

                                                <h6>Dark Alert</h6>
                                                <UncontrolledAlert color="dark" className="alert-top-border mb-0">
                                                    <i className="ri-refresh-line me-3 align-middle fs-16"></i>Dark
                                                    - Top border alert
                                                </UncontrolledAlert>

                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup lang-jsx" style={{ maxHeight: "260px" }}>
                                            <code>
                                                <TopBarAlertsExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Label Icon Arrow Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>alert-label-icon label-arrow</code> class to show an alert with label icon and arrow.</p>
                                    <div className="live-preview">

                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>
                                                <UncontrolledAlert color="primary" className="alert-label-icon label-arrow ">
                                                    <i className="ri-user-smile-line label-icon"></i>Primary -
                                                    Label icon arrow  alert
                                                </UncontrolledAlert>

                                                <h6>Secondary Alert</h6>
                                                <UncontrolledAlert color="secondary" className="alert-label-icon label-arrow ">
                                                    <i className="ri-check-double-line label-icon"></i>Secondary -
                                                    Label icon
                                                    arrow alert
                                                </UncontrolledAlert>

                                                <h6>Success Alert</h6>
                                                <UncontrolledAlert color="success" className="alert-label-icon label-arrow ">
                                                    <i className="ri-notification-off-line label-icon"></i>Success
                                                    - Label
                                                    icon arrow alert
                                                </UncontrolledAlert>

                                                <h6>Danger Alert</h6>
                                                <UncontrolledAlert color="danger" className="alert-label-icon label-arrow mb-xl-0">
                                                    <i className="ri-error-warning-line label-icon"></i>Danger
                                                    - Label
                                                    icon arrow alert
                                                </UncontrolledAlert>

                                            </Col>

                                            <Col xl={6}>

                                                <h6>Warning Alert</h6>
                                                <UncontrolledAlert color="warning" className="alert-label-icon label-arrow ">
                                                    <i className="ri-alert-line label-icon"></i>Warning -
                                                    Label icon arrow alert
                                                </UncontrolledAlert>

                                                <h6>info Alert</h6>
                                                <UncontrolledAlert color="info" className="alert-label-icon label-arrow ">
                                                    <i className="ri-airplay-line label-icon"></i>Info -
                                                    Label icon arrow alert
                                                </UncontrolledAlert>

                                                <h6>Light Alert</h6>
                                                <UncontrolledAlert color="light" className="alert-label-icon label-arrow ">
                                                    <i className="ri-mail-line label-icon"></i>Light
                                                    - Label icon arrow alert
                                                </UncontrolledAlert>

                                                <h6>Dark Alert</h6>
                                                <UncontrolledAlert color="dark" className="alert-label-icon label-arrow mb-0">
                                                    <i className="ri-refresh-line label-icon"></i>Dark
                                                    - Label icon arrow alert
                                                </UncontrolledAlert>

                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup lang-jsx" style={{ maxHeight: "260px" }}>
                                            <code>
                                                <LabelIconArrowAlertsExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Rounded Label Icon Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>alert-label-icon rounded-label</code> class to set an alert with a rounded label icon.</p>
                                    <div className="live-preview">

                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Alert</h6>
                                                <UncontrolledAlert color="primary" className="alert-label-icon rounded-label shadow">
                                                    <i className="ri-user-smile-line label-icon"></i>Primary -
                                                    Rounded label alert
                                                </UncontrolledAlert>

                                                <h6>Secondary Alert</h6>
                                                <UncontrolledAlert color="secondary" className="alert-label-icon rounded-label shadow">
                                                    <i className="ri-check-double-line label-icon"></i>Secondary
                                                    - Rounded
                                                    label alert
                                                </UncontrolledAlert>

                                                <h6>Success Alert</h6>
                                                <UncontrolledAlert color="success" className="alert-label-icon rounded-label shadow">
                                                    <i className="ri-notification-off-line label-icon"></i>Success
                                                    - Rounded
                                                    label alert
                                                </UncontrolledAlert>

                                                <h6>Danger Alert</h6>
                                                <UncontrolledAlert color="danger" className="alert-label-icon rounded-label shadow">
                                                    <i className="ri-error-warning-line label-icon"></i>Danger
                                                    - Rounded
                                                    label alert
                                                </UncontrolledAlert>

                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Alert</h6>
                                                <UncontrolledAlert color="warning" className="alert-label-icon rounded-label shadow">
                                                    <i className="ri-alert-line label-icon"></i>Warning - Rounded
                                                    label alert
                                                </UncontrolledAlert>

                                                <h6>Info Alert</h6>
                                                <UncontrolledAlert color="info" className="alert-label-icon rounded-label shadow">
                                                    <i className="ri-airplay-line label-icon"></i>Info -
                                                    Rounded label
                                                    alert
                                                </UncontrolledAlert>

                                                <h6>Light Alert</h6>
                                                <UncontrolledAlert color="light" className="alert-label-icon rounded-label shadow">
                                                    <i className="ri-mail-line label-icon"></i>Light -
                                                    Rounded label
                                                    alert
                                                </UncontrolledAlert>

                                                <h6>Dark Alert</h6>
                                                <UncontrolledAlert color="dark" className="alert-label-icon rounded-label shadow">
                                                    <i className="ri-refresh-line label-icon"></i>Dark -
                                                    Rounded label
                                                    alert
                                                </UncontrolledAlert>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup lang-jsx" style={{ maxHeight: "260px" }}>
                                            <code>
                                                <RoundedLabelIconAlertsExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Solid Alerts" />
                                <CardBody>
                                    <p className="text-muted">Use the <code>bg-*</code>, <code>border-*</code> & <code>text-white</code> class to set an alert with solid style.</p>

                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <h6>Primary Solid Alert</h6>
                                                <Alert color="primary" className="alert bg-primary border-primary text-white shadow">
                                                    Hi! - Solid <b>primary alert</b> example
                                                </Alert>

                                                <h6>Secondary Solid Alert</h6>
                                                <Alert color="secondary" className="alert bg-secondary border-secondary text-white shadow">
                                                    How are you! - Solid <b>secondary alert</b> example
                                                </Alert>

                                                <h6>Success Solid Alert</h6>
                                                <Alert color="success" className="alert bg-success border-success text-white shadow">
                                                    Yey! Everything worked!  - Solid <b>success alert</b> example
                                                </Alert>

                                                <h6>Danger Solid Alert</h6>
                                                <Alert color="danger" className="alert bg-danger border-danger text-white shadow mb-xl-0">
                                                    Something is very wrong! - Solid <b>danger alert</b> example
                                                </Alert>
                                            </Col>

                                            <Col xl={6}>
                                                <h6>Warning Solid Alert</h6>
                                                <Alert color="warning" className="alert bg-warning border-warning text-white shadow">
                                                    Uh oh, something went wrong! - Solid <b>warning alert</b> example
                                                </Alert>

                                                <h6>Info Solid Alert</h6>
                                                <Alert color="info" className="alert bg-info border-info text-white shadow">
                                                    Don't forget' it ! - Solid <b>info alert</b> example
                                                </Alert>

                                                <h6>Light Solid Alert</h6>
                                                <Alert color="light" className="alert bg-light border-light text-body shadow">
                                                    Mind Your Step! - Solid <b>secondary alert</b> example
                                                </Alert>

                                                <h6>Dark Solid Alert</h6>
                                                <Alert color="dark" className="alert bg-dark border-dark text-white shadow mb-0">
                                                    Did you know? - Solid <b>dark alert</b> example
                                                </Alert>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: "260px" }}>
                                            <code>
                                                <SolidAlertsExample />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiAlerts;
