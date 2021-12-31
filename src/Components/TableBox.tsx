import React, {Component} from 'react';
import DataTable, {createTheme, TableColumn} from 'react-data-table-component';
import ITData from "../interfaces/tdata.interface";

const customStyles = {
    cells: {
        style: {
            cursor: "pointer",
            whiteSpace: "no-wrap"
        }
    },
    headCells: {
        style: {
            background: '#032c3d'
        }
    }
};
createTheme('wash-theme', {
    text: {
        primary: '#eee',
        secondary: '#75E6DA',
    },
    background: {
        default: '#05445E',
    },
    divider: {
        default: '#0d98ba',
    },
    highlightOnHover: {
        default: "#0d98ba"
    },
}, 'dark');
const columns: TableColumn<ITData>[] = [
    {
        name: 'Id',
        selector: row => row.id,
        maxWidth:'10px'
    },
    {
        name: 'Partner Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Address',
        selector: row => row.address,
    },
    {
        name: 'Website',
        cell: row => (
            <a href={row.website}>
                {row.website}
            </a>
        ),
    },
    {
        name: 'Office',
        selector: row => row.offices,
        sortable: true,
        maxWidth:'10px'
    }
];

interface Props {
    partners: Array<ITData>
}

interface State {
    selectedId: number
}

class TableBox extends Component<Props, State> {
    render() {
        return <DataTable responsive={true} fixedHeader={true} fixedHeaderScrollHeight={"300px"} columns={columns}
                          data={this.props.partners}
                          highlightOnHover={true} theme="wash-theme" customStyles={customStyles}/>;
    };
}

export default TableBox;
