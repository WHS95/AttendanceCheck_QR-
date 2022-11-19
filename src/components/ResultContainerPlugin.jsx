import React from 'react';

function filterResults(results) {
    let filteredResults = [];
    for (var i = 0; i < results.length; ++i) {
        if (i === 0) {
            filteredResults.push(results[i]);
            continue;
        }

        if (results[i].decodedText !== results[i-1].decodedText) {
            filteredResults.push(results[i]);
        }
    }
    return filteredResults;
}

class ResultContainerTable extends React.Component {
    render() {
        var results = filterResults(this.props.data);
        return (
            <table className={'Qrcode-result-table'}>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>데이터</td>
                        <td>코드형태</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map((result, i) => {
                            console.log(result);
                            return (<tr key={i}>
                                <td>{i}</td>
                                {/* 코드이 id */}
                                <td>{result.decodedText}</td>
                                {/* 코드에 담겨있는 데이터 */}
                                <td>{result.result.format.formatName}</td>
                                {/* 카메라에 읽히 코드의 형태 */}
                            </tr>);
                        })
                    }
                </tbody>
            </table>
        );
    }
}

class ResultContainerPlugin extends React.Component {
    render() { 
        let results = filterResults(this.props.results);
        return (<div className='Result-container'>
                <div className='Result-header'>Scanned results ({results.length})</div>
                <div className='Result-section'>
                    <ResultContainerTable data={this.props.results} />
                </div>
            </div>);
    }
}

export default ResultContainerPlugin;