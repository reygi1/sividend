import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import './Dashboard.css'

import TeachingBubbleWide from './TeachingBubble'
import ChartComponent from '../../Chart/ChartComponent';
import SpinnerBasic from '../../SpinnerBasic'
import ReactStoreIndicator from 'react-score-indicator'

import { dataChange } from '../../../reducers/dataReducer';
import { Card } from '@uifabric/react-cards';
import { Icon } from '@fluentui/react/lib/Icon';
import { sentimentChange } from '../../../reducers/sentimentReducer';



const Dashboard = () => {

    const handlePosNeg = (n) => {
        if(!n || n=== undefined || n===null)
        return ''
        else if(n.includes('-'))
            return 'negative'
        else
        return 'positive'
    }
    

    const dispatch = useDispatch()
    const currentStock = useSelector(state=> state.stock)
    const sentimentData = useSelector(state=> state.sentiment)
    const stockData = useSelector(state=> state.data)
    useEffect(() => {
        dispatch(dataChange(currentStock))        
        dispatch(sentimentChange(currentStock))
        console.log(stockData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStock]);   
   
if(stockData === null || stockData === undefined || !stockData || !stockData.quoteSummary || !stockData.quoteSummary.result[0] || !stockData.quoteSummary.result[0].financialData) {
        return(
            <div className="dashBody">           
            
            <div className="search1" id="sear1">
                    <p>Search company name or ticker </p>                
                    <TeachingBubbleWide />
                </div>
                <SpinnerBasic />
                
            </div>
        );
        }
    else {
        return(
            <div className="dashBody">           
            
            <div className="search1" id="sear1">
                    <p>Search company name or ticker </p>                
                    <TeachingBubbleWide />
                </div>
        <div className="title"><h1>{stockData.quoteSummary.result[0].price.shortName}</h1></div>




            <section id="s1"><div className="chart-container"><ChartComponent /></div>



            <div className="sentiment-container">
                <Card compact={true} styles={{
                    root: {
                        background: 'white',
                        borderTop: '5px solid #0078d4',
                        maxWidth: '2000px',
                        heigth: '480px'
                        },
                    header: {
                        root: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        }
                    }}}> 
                
                    <Card.Item styles={{root: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center'
                        }}}> <Icon styles = {{root: {color: '#0078d4', verticalAlign: 'middle'}}} iconName="AnalyticsView"  /> Sentiment Analysis</Card.Item>
                        
                    <Card.Item>
                        <div className="sentiment-inside">
                        {sentimentData === null ?
        <SpinnerBasic /> :  
        <div className="sentcont1">
           
            <p style={{textAlign: 'center', fontSize: '12px', fontStyle: 'italic'}}>Sentiment score ranges between 0 and 100, 0 being very negative sentiment, 50 being neutral sentiment and 100 being very positive sentiment. Data is updated in real-time every request.</p>
           
        <div className="tablesent-cont">
            <table className="tablesent1">
             <tr>
            <td><span><strong>  <Icon styles = {{root: {color: '#0078d4', verticalAlign: 'middle'}}} iconName="PageData"  /> Sentiment Analysis Score:</strong></span></td> <td><span> <ReactStoreIndicator
        value={(sentimentData.gnews + sentimentData.twitter + sentimentData.stwits)/3 > 1 ? 100 : (sentimentData.gnews + sentimentData.twitter + sentimentData.stwits)/3 < -1 ? 0 : (((sentimentData.gnews + sentimentData.twitter + sentimentData.stwits)/3 + 1)/2)*100}
        maxValue={100}
        stepsColors = {[
            '#d12000',
            '#ed8d00',
            '#f1bc00',
            '#d9ddba',
            '#91bf86',
            '#3da940',
            '#25f290',
            '#009fff',
          ]}
      /></span>
                            
            </td>
    </tr>
        <tr>
            <td><span><strong> <Icon styles = {{root: {color: '#0078d4', verticalAlign: 'middle'}}} iconName="News"  /> News Sentiment</strong>:</span> </td> <td> <span>
                        <ReactStoreIndicator
        value={sentimentData.gnews > 1 ? 100 : sentimentData.gnews < -1 ? 0 : ((sentimentData.gnews + 1)/2)*100 }
        maxValue={100} stepsColors = {[
            '#d12000',
            '#ed8d00',
            '#f1bc00',
            '#d9ddba',
            '#91bf86',
            '#3da940',
            '#25f290',
            '#009fff',
          ]}
                        /></span></td>
    </tr>
    <tr>
            <td><span><strong><Icon styles = {{root: {color: '#0078d4', verticalAlign: 'middle'}}} iconName="Comment"  /> Twitter Sentiment:</strong>
            </span></td> <td><span><ReactStoreIndicator
        value={sentimentData.twitter > 1 ? 100 : sentimentData.twitter < -1 ? 0 : ((sentimentData.twitter + 1)/2)*100}
        maxValue={100} stepsColors = {[
            '#d12000',
            '#ed8d00',
            '#f1bc00',
            '#d9ddba',
            '#91bf86',
            '#3da940',
            '#25f290',
            '#009fff',
          ]}
      /></span></td>
    </tr>
    
    <tr>
            <td><span><strong><Icon styles = {{root: {color: '#0078d4', verticalAlign: 'middle'}}} iconName="SocialListeningLogo"  />Social Trading Sentiment:</strong> </span></td> <td><span><ReactStoreIndicator
        value={sentimentData.stwits > 1 ? 100 : sentimentData.stwits < -1 ? 0 : ((sentimentData.stwits + 1)/2)*100}
        maxValue={100} stepsColors = {[
            '#d12000',
            '#ed8d00',
            '#f1bc00',
            '#d9ddba',
            '#91bf86',
            '#3da940',
            '#25f290',
            '#009fff',
          ]}
      /></span></td>
    </tr>
    
    </table></div></div>
      }

                           
                            </div> 
                            </Card.Item>
                
                </Card>

            
            </div>
            </section>


            <section id="s2">
                <div className="table1cont">
            <Card compact={true} styles={{root: {
			background: 'white',
			borderTop: '5px solid #0078d4',
            maxWidth: '2000px',
            heigth: '480px'
		  },
          header: {
            root: {
              fontSize: 20,
              fontWeight: 'bold',
            }
          }}}> <Card.Item styles={{root: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center'
            }}}> <Icon styles = {{root: {color: '#0078d4', verticalAlign: 'middle',}}} iconName="Money"  /> Price Data</Card.Item>
            <Card.Item>
                <table className="table" id="tableprice">
  <thead>
   
  </thead>
  <tbody>
    <tr>
    <td><span>Daily volume(3Month):</span><span><strong>{stockData.quoteSummary.result[0].price.averageDailyVolume3Month.fmt}</strong></span></td>
    <td><span>Current Ratio:</span><span><strong>{stockData.quoteSummary.result[0].price.averageDailyVolume10Day.fmt}</strong></span></td>
    <td><span>Market Cap:</span><span><strong>{stockData.quoteSummary.result[0].price.marketCap.fmt}</strong></span></td>
    </tr> 
    <tr>
    <td><span>Market Open:</span><span><strong>{stockData.quoteSummary.result[0].price.regularMarketOpen.fmt}</strong></span></td>
    <td><span>Daily High:</span><span><strong>{stockData.quoteSummary.result[0].price.regularMarketDayHigh.fmt}</strong></span></td>
    <td><span>Daily Low:</span><span><strong>{stockData.quoteSummary.result[0].price.regularMarketDayLow.fmt}</strong></span></td>
    </tr> 
    <tr>
    <td><span>Previous Close:</span><span><strong>{stockData.quoteSummary.result[0].price.regularMarketPreviousClose.fmt}</strong></span></td>
    <td><span>Market Price:</span><span><strong>{stockData.quoteSummary.result[0].price.regularMarketPrice.fmt}</strong></span></td>
    <td><span>Market Change:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].price.regularMarketChange.fmt)}><strong>{stockData.quoteSummary.result[0].price.regularMarketChange.fmt}</strong></span></td>
    </tr> 
    
    

  </tbody>
</table></Card.Item>
</Card>
</div>


            <Card compact={true} styles={{root: {
			background: 'white',
			borderTop: '5px solid #0078d4',
            maxWidth: '2000px',
            heigth: '480px'
		  },
          header: {
            root: {
              fontSize: 20,
              fontWeight: 'bold',
            }
          }}}> <Card.Item styles={{root: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center'
            }}}> <Icon styles = {{root: {color: '#0078d4'}}} iconName="Financial"  /> Financials</Card.Item><Card.Item>
                <table className="table">
  <thead>
   
  </thead>
  <tbody>
    <tr>
    <td><span>Current Price:</span><span><strong>{stockData.quoteSummary.result[0].financialData.currentPrice.fmt}</strong></span></td>
    <td><span>Current Ratio:</span><span><strong>{stockData.quoteSummary.result[0].financialData.currentRatio.fmt}</strong></span></td>
    <td><span>Debt to Equity:</span><span><strong>{stockData.quoteSummary.result[0].financialData.debtToEquity.fmt}</strong></span></td>
    </tr> 
    <tr>
    <td><span>EBITDA:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.ebitda.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.ebitda.fmt}</strong></span></td>
    <td><span>EBITDA Margins:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.ebitdaMargins.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.ebitdaMargins.fmt}</strong></span></td>
    <td><span>Free Cashflow:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.freeCashflow.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.freeCashflow.fmt}</strong></span></td>
    </tr>
    <tr>
    <td><span>Operating Cashflow:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.operatingCashflow.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.operatingCashflow.fmt}</strong></span></td>
    <td><span>Operating Margins:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.operatingMargins.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.operatingMargins.fmt}</strong></span></td>
    <td><span>Profit Margins:</span><span  className={handlePosNeg(stockData.quoteSummary.result[0].financialData.profitMargins.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.profitMargins.fmt}</strong></span></td>
    </tr>
    <tr>
    <td><span>ROA:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.returnOnAssets.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.returnOnAssets.fmt}</strong></span></td>
    <td><span>ROE:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.returnOnEquity.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.returnOnEquity.fmt}</strong></span></td>
    <td><span>RPS:</span><span><strong>{stockData.quoteSummary.result[0].financialData.revenuePerShare.fmt}</strong></span></td>
    </tr>
    <tr>
    <td><span>Target High Price:</span><span><strong>{stockData.quoteSummary.result[0].financialData.targetHighPrice.fmt}</strong></span></td>
    <td><span>Target Low Price:</span><span><strong>{stockData.quoteSummary.result[0].financialData.targetLowPrice.fmt}</strong></span></td>
    <td><span>Target Mean Price:</span><span><strong>{stockData.quoteSummary.result[0].financialData.targetMeanPrice.fmt}</strong></span></td>
    </tr>
    <tr>
    <td><span>Total Cash:</span><span><strong>{stockData.quoteSummary.result[0].financialData.totalCash.fmt}</strong></span></td>
    <td><span>Total Debt:</span><span><strong>{stockData.quoteSummary.result[0].financialData.totalDebt.fmt}</strong></span></td>
    <td><span>Total Revenue:</span><span><strong>{stockData.quoteSummary.result[0].financialData.totalRevenue.fmt}</strong></span></td>
    </tr>
    <tr>    
    <td><span>Earnings Growth:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.earningsGrowth.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.earningsGrowth.fmt}</strong></span></td>
    <td><span>Gross Margins:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.grossMargins.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.grossMargins.fmt}</strong></span></td>
    <td><span>Quick Ratio:</span><span><strong>{stockData.quoteSummary.result[0].financialData.quickRatio.fmt}</strong></span></td>
    </tr>
    <tr>    
    <td><span>Revenue Growth:</span><span className={handlePosNeg(stockData.quoteSummary.result[0].financialData.revenueGrowth.fmt)}><strong>{stockData.quoteSummary.result[0].financialData.revenueGrowth.fmt}</strong></span></td>    
    <td><span>Target Median Price:</span><span><strong>{stockData.quoteSummary.result[0].financialData.targetMedianPrice.fmt}</strong></span></td>    
    <td><span>Cash per Share:</span><span><strong>{stockData.quoteSummary.result[0].financialData.totalCashPerShare.fmt}</strong></span></td>
    </tr>


  </tbody>
</table></Card.Item></Card>

<div className="tablea3">
    
<Card compact={true} styles={{root: {
			background: 'white',
			borderTop: '5px solid #0078d4',
            maxWidth: '2000px',
            heigth: '480px'
		  },
          header: {
            root: {
              fontSize: 20,
              fontWeight: 'bold',
            }
          }}}> <Card.Item styles={{root: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center'
            }}}> <Icon styles = {{root: {color: '#0078d4'}}} iconName="EntitlementPolicy"  /> Summary</Card.Item><Card.Item>
                
                <table className="table">

  <tbody>
    <tr>
    <td><span><strong>Business Summary:</strong></span><span>{stockData.quoteSummary.result[0].summaryProfile.longBusinessSummary}</span></td>
    </tr>
    <tr>    
    <td><span><strong>Location:</strong></span><span>{stockData.quoteSummary.result[0].summaryProfile.address1}, {stockData.quoteSummary.result[0].summaryProfile.city} {stockData.quoteSummary.result[0].summaryProfile.state} {stockData.quoteSummary.result[0].summaryProfile.zip}, {stockData.quoteSummary.result[0].summaryProfile.country}</span></td>
    </tr>
    <tr>    
    <td><span><strong>Phone:</strong></span><span>{stockData.quoteSummary.result[0].summaryProfile.phone}</span></td>
    
    </tr>
    <tr>
    <td><span><strong>Website:</strong></span><span><a href={stockData.quoteSummary.result[0].summaryProfile.website}>{stockData.quoteSummary.result[0].summaryProfile.website}</a></span></td>
    
    </tr>

    <tr>    
    <td><span><strong>Industry:</strong></span><span>{stockData.quoteSummary.result[0].summaryProfile.industry}</span></td>
    </tr>
    <tr>
    <td><span><strong>Sector:</strong></span><span>{stockData.quoteSummary.result[0].summaryProfile.sector}</span></td>
   </tr>
   <tr>
    <td><span><strong>N. of employees:</strong></span><span>{stockData.quoteSummary.result[0].summaryProfile.fullTimeEmployees}</span></td>

    </tr>

  </tbody>
</table></Card.Item></Card>
</div>

</section>


          
            </div>
        );
    }
}
  
export default Dashboard;