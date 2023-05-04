import React from 'react'

const TeamSecTemplate = (props) => {
    return (
        <div className='team_sec_card my-10 mx-10'>
            <img
                src={props.img}
                alt='team-member'
                className='h-96 my-5 rounded-xl'
            />
            <h4 className='text-3xl font-thin text-white mb-1'>{props.name}</h4>
            <h4 className='text-lg font-bold text-slate-200'>{props.desgn}</h4>
        </div>
    )
}

export default TeamSecTemplate