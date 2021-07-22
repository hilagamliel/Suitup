import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from "react-redux";
import React, { useRef } from 'react';
import './Dialoge.scss'
const Dialoge = (props) => {

    const [open, setOpen] = React.useState(false);
    let select = useRef();

    return (
        <Modal className="placedialog"
            closeIcon
            open={open}
            trigger={<button class="ui teal basic button">קפיצה לתגובה</button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >

            <Header icon='archive' content='  ...קפוץ לתגובה מספר' />

            <Modal.Content>
                <select ref={select}>
                    {props.Article.comments.map((item, index) => {
                        return <option>{index + 1}</option>
                    })}
                </select>
            </Modal.Content>

            <Modal.Actions>
                <Button color='red' onClick={() => {
                    if (props.Article.comments.length != 0)
                        document.getElementById(select.current.value).scrollIntoView()
                    setOpen(false)
                }}>
                    <Icon name='remove' /> קפוץ
                </Button>
            </Modal.Actions>
        </Modal>




    );
}
const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps)(Dialoge);