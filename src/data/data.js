import React from 'react';
import { withStyles, Theme, createStyles, makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { green, red, yellow } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: 'black',
            color: 'white',
        },
        body: {
            fontSize: 14,
            border: '1px solid black',
            width: 60,
            height: 0
        },
    }),
)(TableCell);
const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                border: '1px solid black',
                borderBottom: '0px solid rgba(224, 224, 224, 1)',
                padding: '0px 8px 0px 8px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
        },
    },
});

const StyledTableRow = withStyles(() =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: '#dedede',
            },
        },
    }),
)(TableRow);

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const useStyles = makeStyles({
    root: {
        '& > svg': {
            margin: '4px',
        },
    },
    table: {
        minWidth: 700,
    },

});
const data = [
    {
        _steelLabel: '(3)-C15X50#',
        _steelMeta: {
            _sectionModulus_Zu: 0.031134259259259257,
            _momentofInertia_I: 0.019483024691358024,
            _shape: {
                _type: 'C',
                _height: 15,
                _weightPerUnitLength: 50,
            },
            _stockStatus: '',
            _priority: 3,
            _area: 1.09,
            _depth: 3,
            _webthickness: 0.132,
            _flange: {
                _width: 1.37,
                _thickness: 0.273,
            },
            _distance: {
                K: 0.6875,
                T: 1.625,
                _gage: 0,
            },
            _rts: 0.455,
            _h0: 2.73,
            _shearCtr: 0.493,
            _compactSectionCriteria: {
                flange: 0.273,
                web: 0.23,
            },
            _axisX: {
                I: 1.24,
                S: 1.04,
                R: 1.2,
                Z: 0.169,
            },
            _axisY: {
                I: 0.182,
                S: 0.182,
                R: 0.394,
                X: 0.443,
                Z: 0.364,
                XP: 0.296,
            },
            _torsionalProperties: {
                J: 0.0226,
                CW: 0.276,
                RU: 1.57,
                H: 0.645,
            },
        },
        _calculations: {
            _sectionModulusStatus: 'FAIL',
            _deflectionStatus: [
                {
                    _beamIndex: 1,
                    _pointDeflection: [
                        {
                            _rank: 1,
                            _deflection: 0.2131259625225893,
                        },
                        {
                            _rank: 2,
                            _deflection: 3.7280650513471607,
                        },
                    ],
                    _totalDeflection: 3.94119101386975,
                    _status: 'FAIL',
                },
                {
                    _beamIndex: 2,
                    _pointDeflection: [
                        {
                            _rank: 1,
                            _deflection: 0.007287316580564769,
                        },
                        {
                            _rank: 2,
                            _deflection: 3.7280650513471607,
                        },
                    ],
                    _totalDeflection: 3.7353523679277254,
                    _status: 'FAIL',
                },
                {
                    _beamIndex: 3,
                    _pointDeflection: [
                        {
                            _rank: 1,
                            _deflection: 0.055144801762085485,
                        },
                        {
                            _rank: 2,
                            _deflection: 3.7276327109579492,
                        },
                    ],
                    _totalDeflection: 3.7827775127200347,
                    _status: 'FAIL',
                },
            ],
            _overallStatus: 'FAIL',
        },
    },
    {
        _steelLabel: '',
        _steelMeta: {
            _sectionModulus_Zu: 0.031134259259259257,
            _momentofInertia_I: 0.019483024691358024,
            _shape: {
                _type: 'C',
                _height: 15,
                _weightPerUnitLength: 50,
            },
            _stockStatus: ' Stock',
            _priority: 3,
            _area: 1.09,
            _depth: 3,
            _webthickness: 0.132,
            _flange: {
                _width: 1.37,
                _thickness: 0.273,
            },
            _distance: {
                K: 0.6875,
                T: 1.625,
                _gage: 0,
            },
            _rts: 0.455,
            _h0: 2.73,
            _shearCtr: 0.493,
            _compactSectionCriteria: {
                flange: 0.273,
                web: 0.23,
            },
            _axisX: {
                I: 1.24,
                S: 1.04,
                R: 1.2,
                Z: 0.169,
            },
            _axisY: {
                I: 0.182,
                S: 0.182,
                R: 0.394,
                X: 0.443,
                Z: 0.364,
                XP: 0.296,
            },
            _torsionalProperties: {
                J: 0.0226,
                CW: 0.276,
                RU: 1.57,
                H: 0.645,
            },
        },
        _calculations: {
            _sectionModulusStatus: 'FAIL',
            _deflectionStatus: [
                {
                    _beamIndex: 1,
                    _pointDeflection: [
                        {
                            _rank: 1,
                            _deflection: 0.2131259625225893,
                        },
                        {
                            _rank: 2,
                            _deflection: 3.7280650513471607,
                        },
                    ],
                    _totalDeflection: 3.94119101386975,
                    _status: 'PASS',
                },
                {
                    _beamIndex: 2,
                    _pointDeflection: [
                        {
                            _rank: 1,
                            _deflection: 0.007287316580564769,
                        },
                        {
                            _rank: 2,
                            _deflection: 3.7280650513471607,
                        },
                    ],
                    _totalDeflection: 3.7353523679277254,
                    _status: 'FAIL',
                },
                {
                    _beamIndex: 3,
                    _pointDeflection: [
                        {
                            _rank: 1,
                            _deflection: 0.055144801762085485,
                        },
                        {
                            _rank: 2,
                            _deflection: 3.7276327109579492,
                        },
                    ],
                    _totalDeflection: 3.7827775127200347,
                    _status: 'BORDERLINE',
                },
            ],
            _overallStatus: 'FAIL',
        },
    },
];





export default function Data() {
    const classes = useStyles();

    return (
        <MuiThemeProvider>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Steel Label</StyledTableCell>
                            <StyledTableCell>Stock Status</StyledTableCell>
                            <StyledTableCell>Priority</StyledTableCell>
                            <StyledTableCell className={classes.container1} >
                                <StyledTableRow >
                                    <StyledTableCell >Shape</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>Type</StyledTableCell>
                                    <StyledTableCell >Height</StyledTableCell>
                                    <StyledTableCell>Weight Per Unit length (lb/ft)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell className={classes.alignText}  >Steel Status</StyledTableCell>
                            <StyledTableCell>
                                <StyledTableRow className={classes.container}>
                                    <StyledTableCell>Area</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>A (in &sup2;)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell>
                                <StyledTableRow className={classes.container}>
                                    <StyledTableCell>Depth</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>d (in)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell>
                                <StyledTableRow className={classes.container}>
                                    <StyledTableCell>Web</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>Thickness tw (in)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell >
                                <StyledTableRow className={classes.container} >
                                    <StyledTableCell >Flange</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>Width bf (in)</StyledTableCell>
                                    <StyledTableCell>Thickness tf (in)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell >
                                <StyledTableRow className={classes.container}>
                                    <StyledTableCell  >Distance</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>K (in)</StyledTableCell>
                                    <StyledTableCell>T (in)</StyledTableCell>
                                    <StyledTableCell>Gage (in)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell>
                                <StyledTableRow>
                                    <StyledTableCell>rts</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow className={classes.container}>
                                    <StyledTableCell>in</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell>
                                <StyledTableRow >
                                    <StyledTableCell>h0</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>in</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell>
                                <StyledTableRow>
                                    <StyledTableCell >Shear Ctr</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>e0(in)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell className={classes.container1}>
                                <StyledTableRow >
                                    <StyledTableCell >Compact Section Criteria</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>bf/(2*tf)</StyledTableCell>
                                    <StyledTableCell>h/tw</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell>
                                <StyledTableRow className={classes.container}>
                                    <StyledTableCell >Axis X-X</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>I (in &sup2;)</StyledTableCell>
                                    <StyledTableCell>S (in &sup3;)</StyledTableCell>
                                    <StyledTableCell>r (in)</StyledTableCell>
                                    <StyledTableCell>Z (in &sup3;)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell>
                                <StyledTableRow className={classes.container}>
                                    <StyledTableCell >Axis Y-Y</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>I (in &sup4;)</StyledTableCell>
                                    <StyledTableCell>S (in &sup3;)</StyledTableCell>
                                    <StyledTableCell>r (in)</StyledTableCell>
                                    <StyledTableCell>x_(in &sup3;)</StyledTableCell>
                                    <StyledTableCell>Z</StyledTableCell>
                                    <StyledTableCell>xp (in)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                            <StyledTableCell>
                                <StyledTableRow className={classes.container}>
                                    <StyledTableCell > Torsional Properties</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>J  (in &sup4;)</StyledTableCell>
                                    <StyledTableCell>Cw (in &sup6;)</StyledTableCell>
                                    <StyledTableCell>rPi (in)</StyledTableCell>
                                    <StyledTableCell>H (in &sup4;)</StyledTableCell>
                                </StyledTableRow>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((list, key) => {
                                const keyVal = Object.keys(list);
                                return (
                                    <StyledTableRow key={key}>
                                        <StyledTableCell  >{list._steelLabel}</StyledTableCell>
                                        <StyledTableCell  >{list._steelMeta._stockStatus}</StyledTableCell>
                                        <StyledTableCell  >{list._steelMeta._priority}</StyledTableCell>
                                        <StyledTableCell>
                                            <StyledTableRow
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row', justifyContent: 'space-between',
                                                }}>
                                                <StyledTableCell style={{ flex: 'auto' }}>
                                                    {list._steelMeta._shape._type}</StyledTableCell>
                                                <StyledTableCell style={{ flex: 'auto', textAlign: 'left' }} >
                                                    {list._steelMeta._shape._height}</StyledTableCell>
                                                <StyledTableCell style={{ flex: 'auto', textAlign: 'left' }}>
                                                    {list._steelMeta._shape._weightPerUnitLength}</StyledTableCell>
                                            </StyledTableRow>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <StyledTableRow>
                                                <StyledTableCell>
                                                    {list._calculations._sectionModulusStatus === 'FAIL' ?
                                                        <FiberManualRecordIcon
                                                            fontSize="large" style={{ color: red[700] }} /> :
                                                        <React.Fragment>
                                                            {
                                                                list._calculations._sectionModulusStatus === 'PASS' ?
                                                                    <FiberManualRecordIcon fontSize="large"
                                                                        style={{ color: green[500] }} /> :
                                                                    <FiberManualRecordIcon fontSize="large"
                                                                        style={{ color: yellow[200] }} />
                                                            }
                                                        </React.Fragment>
                                                    }</StyledTableCell>
                                                {
                                                    list._calculations._deflectionStatus.map((val, key) => {
                                                        return (<StyledTableCell key={key}>
                                                            {
                                                                val._status === 'FAIL' ?
                                                                    <FiberManualRecordIcon fontSize="large"
                                                                        style={{ color: red[700] }} /> :
                                                                    <React.Fragment>
                                                                        {val._status === 'PASS' ?
                                                                            <FiberManualRecordIcon fontSize="large"
                                                                                style={{ color: green[500] }} /> :
                                                                            <FiberManualRecordIcon fontSize="large"
                                                                                style={{ color: yellow[200] }} />
                                                                        }
                                                                    </React.Fragment>
                                                            }
                                                        </StyledTableCell>);
                                                    })
                                                }
                                            </StyledTableRow>
                                        </StyledTableCell>

                                        <StyledTableCell  >{list._steelMeta._area}</StyledTableCell>
                                        <StyledTableCell  >{list._steelMeta._depth}</StyledTableCell>
                                        <StyledTableCell  >{list._steelMeta._webthickness}</StyledTableCell>
                                        <StyledTableCell>
                                            <StyledTableRow
                                                style={{
                                                    display: 'flex', flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                }}>
                                                <StyledTableCell>{list._steelMeta._flange._width}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._flange._thickness}</StyledTableCell>
                                            </StyledTableRow>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <StyledTableRow
                                                style={{
                                                    display: 'flex', flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                }}>
                                                <StyledTableCell>{list._steelMeta._distance.K}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._distance.T}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._distance._gage}</StyledTableCell>
                                            </StyledTableRow>
                                        </StyledTableCell>
                                        <StyledTableCell  >{list._steelMeta._rts}</StyledTableCell>
                                        <StyledTableCell  >{list._steelMeta._h0}</StyledTableCell>
                                        <StyledTableCell  >{list._steelMeta._shearCtr}</StyledTableCell>
                                        <StyledTableCell>
                                            <StyledTableRow
                                                style={{
                                                    display: 'flex', flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                }}>
                                                <StyledTableCell
                                                    className={classes.alignText}>
                                                    {list._steelMeta._compactSectionCriteria.flange}</StyledTableCell>
                                                <StyledTableCell
                                                    className={classes.alignText}>
                                                    {list._steelMeta._compactSectionCriteria.web}</StyledTableCell>
                                            </StyledTableRow>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <StyledTableRow
                                                style={{
                                                    display: 'flex', flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                }}>
                                                <StyledTableCell  >{list._steelMeta._axisX.I}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._axisX.S}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._axisX.R}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._axisX.Z}</StyledTableCell>
                                            </StyledTableRow>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <StyledTableRow
                                                style={{
                                                    display: 'flex', flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                }}>
                                                <StyledTableCell>{list._steelMeta._axisY.I}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._axisY.S}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._axisY.R}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._axisY.X}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._axisY.Z}</StyledTableCell>
                                                <StyledTableCell>{list._steelMeta._axisY.XP}</StyledTableCell>
                                            </StyledTableRow>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <StyledTableRow
                                                style={{
                                                    display: 'flex', flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                }}>
                                                <StyledTableCell>
                                                    {list._steelMeta._torsionalProperties.J}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {list._steelMeta._torsionalProperties.CW}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {list._steelMeta._torsionalProperties.RU}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {list._steelMeta._torsionalProperties.H}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </MuiThemeProvider >
    );
}
// <HomeIcon style={{ color: green[500] }} />
