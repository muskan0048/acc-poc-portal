import React from 'react';
import { 
    Button, Snackbar, Grid,
    Card, Avatar, CardActionArea, Typography,
} from '@material-ui/core';

import log from '../../utils/logger.service'
import {Link} from 'react-router-dom';

import './providerDashboard.css';
import MailIcon from '@material-ui/icons/Mail';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from "@material-ui/core/styles";
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';

import Sharefunctionality from '../Home/Sharefunctionality';
import { store } from '../../store';

import ProviderProfileContainer from '../../containers/userProfleContainer';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';


import HeaderContainer from '../../containers/headerContainer';
import Background from '../../assets/img/newbg.jpg';
import axios from 'axios';
const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: '2px 5px 2px 5px',
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  var share_link={}


export default class ProviderDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            providerData:[],
            updatedData:[],
            disableEmail: true,
            disableName : true,
            fullName:''
            
        }
    }

    updateProfile = (e) =>{

        e.preventDefault()

        var body = JSON.stringify({
            //  fullName:"Akanksha Kashyap", //providerData.fullName,
              fullName:this.state.providerData.fullName,
              partnerId: localStorage.getItem("providerId"),
            //   password: this.state.providerData.password,
              email: this.state.providerData.email,
              mobileNumber: this.state.providerData.mobileNumber,
              Fees:this.state.providerData.Fees,
              country: this.state.providerData.country,
              City:this.state.providerData.City,
              ALine1:this.state.providerData.ALine1,
              ALine2:this.state.providerData.ALine2,
              PinCode:this.state.providerData.PinCode,
              OrganizationName: this.state.providerData.OrganizationName,
              OrganizationAddress: this.state.providerData.OrganizationAddress,
              OrganizationRegNumber: this.state.providerData.OrganizationRegNumber,
              idType: this.state.providerData.idType,
              busCheckedForAPI: this.state.providerData.busCheckedForAPI,
              indCheckedForAPI:this.state.providerData.indCheckedForAPI,
              servicesOffered: this.state.providerData.servicesOffered,
              providerIdentityImg: this.state.providerData.providerIdentityImg,
              partnerType: this.state.providerData.partnerType,
              role: 2
          })

        axios.post('http://localhost:4000/api/auth/provider/update', body, {
            headers: {
                'Content-Type': 'application/json',
            }}).then(res => {
              console.log(res);
             
              
            }).catch(err => {
              console.log(err);
            })

        // fetch('http://localhost:4000/api/auth/provider/update', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }).then(res=> {

        //     console.log(res);
        //     if(res.status === 200) {
        //         console.log("Resssponse is ----",res)
        //         return res.json().then(res=> {
        //             this.setState({
        //                 updatedData:res
        //             })
        //         })
        //     } 
        // }).catch(err=> {
        //     alert(err)
        //    console.log(err);
        // })

    }

    change = (e) =>{

        const items  = this.state.providerData;
        

        if(e.target.name==='name'){
            items.fullName = e.target.value;
            this.setState({providerData: items})
            console.log(e.target.name)
        }

        if(e.target.name==='email'){
            items.email = e.target.value;
            this.setState({providerData: items})
            console.log(e.target.name)
        }
        
    }

    componentDidMount() {
        
        var partnerdata = window.localStorage.getItem('providerData')
        console.log(localStorage)
         this.setState({
           providerData:JSON.parse(partnerdata)
       })
   }




    render() {

        return(
            <div style={{width: '100%', marginTop: '100px'}}>

            <HeaderContainer />

            <Form onSubmit={(e)=>{this.updateProfile(e)}}>
                {this.state.providerData.fullName}

                <Form.Control type="name"
                name='name'
                value={this.state.providerData.fullName}
                disabled={this.state.disableName}
                onChange={(e) => this.change(e)} 
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableName: false })}}>Edit</Button>

                <br/>

                <Form.Control type="email"
                name='email'
                value={this.state.providerData.email}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>
                <Form.Control type="email"
                name='email'
                value={this.state.providerData.mobileNumber}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>

                <Form.Control type="email"
                name='email'
                value={this.state.providerData.Fees}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>

                <Form.Control type="email"
                name='email'
                value={this.state.providerData.country}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>

                <Form.Control type="email"
                name='email'
                value={this.state.providerData.City}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>
                
                <Form.Control type="email"
                name='email'
                value={this.state.providerData.PinCode}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>
                
                <Form.Control type="email"
                name='email'
                value={this.state.providerData.OrganizationName}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>
                
                <Form.Control type="email"
                name='email'
                value={this.state.providerData.OrganizationAddress}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>

                <Form.Control type="email"
                name='email'
                value={this.state.providerData.OrganizationRegNumber}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>

                <Form.Control type="email"
                name='email'
                value={this.state.providerData.idType}
                disabled={this.state.disableEmail}
                onChange={(e) => this.change(e)}
                style={{width: '50%'}}
                />

                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>

                <br/>
                
                
                
                <br/>

                <Button variant="contained" type="submit" color="primary" disabled={this.state.updateDetails} onClick={()=>{console.log("user  -->",this.state.providerData)}} >Update</Button>

            </Form>




        </div>       
           
        )
    }
    
    }
