import { Component } from 'react';
import Member from './Member';
import { getFakeMembers } from './user-service';

export default class MemberList extends Component {

    constructor() {
        super();
        this.state = {
            members: [],
            loading: false,
            error: null
        };
    }

    componentWillMount() {
        /*
            Calling setState before the component has rendered will not kick
            off the updating lifecycle. Calling setState after the component
            has been rendered will kick off the updating lifecycle. If you call
            setState inside an asynchronous callback defined within the
            componentWillMount method, it will be invoked after the component
            has rendered and will trigger the updating lifecycle.
        */
        this.setState({loading: true});
        getFakeMembers(this.props.count).then(
            members => {
                this.setState({members, loading: false});
            },
            error => {
                this.setState({error, loading: false});
            }
        );
    }

    componentWillUpdate() {
        console.log('updating lifecycle');
    }

    render() {
        const { members, loading, error } = this.state;
        return (
            <div className="member-list">
                {(loading) ?
                    <span>Loading Members</span> :
                    (members.length) ?
                        members.map((user, i) =>
                            <Member key={i} {...user} />
                        ) :
                        <span>0 members loaded</span>
                }
            </div>
        );
    }
}