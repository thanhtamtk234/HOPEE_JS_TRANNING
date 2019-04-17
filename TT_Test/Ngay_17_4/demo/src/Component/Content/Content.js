import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TrangThai: 0
        }
    }
    thongbao = () => { alert("Cách xử lí tương tác") }
    thongbao2 = () => { alert("Đây là thông báo số 2") }


    renderButton = () => {
        return(
            <div className="row">
        <div className="btn btn-group">
            <div className="btn btn-info" onClick={()=>this.editClick()}>Edit</div>
            <div className="btn btn-warning" >Remove</div>
        </div>
    </div>
        )     
    }



    renderForm = () => {
       return(
        <div className="row">
        <div className="form-group">
          <input defaultValue={this.props.tieude}  type="text" name="ten" className="from-control" />
          <div className="btn btn-block btn-danger" >
            Save
          </div>
        </div>

        <div className="form-group">
          <input type="text" name="ten" className="from-control" />
          <div className="btn btn-block btn-danger" onClick={()=>this.saveClick()}>
            Save
          </div>
        </div>

      </div>
      )
    }

    displayCheck = () =>{
        if (this.state.TrangThai===0){
            return this.renderButton();
        }
       
        else
        {
            return this.renderForm();
        }
    }

    editClick = () =>{
        this.setState({TrangThai:1});

    }

    saveClick = () =>{
        this.setState({TrangThai:0});

    }


    render() {
        return (
        <div className="col-lg-4">
            <div className="row">
                <div className="col-lg-5">
                    <div className="p-1">
                        <img className="img-fluid rounded-circle" src={this.props.anh} alt="" />
                    </div>
                </div>

        <div className="col-lg-7">
            <div className="p-1">
               <h2 className="display-6">{this.props.tieude}</h2>
                <p>{this.props.trichdan}</p>



        {this.displayCheck()}
   
        



    </div>
        </div>
        </div>
        </div>

        );
    }
}

export default Content;