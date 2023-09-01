import React from 'react'

export default function Notifications(props) {
  return (
      props.alert && <div className="alert alert-success alert-dismissible fade show my-2" role="alert">
               <strong>{props.alert.type} : </strong> {props.alert.msg}
            </div>
  )
}
