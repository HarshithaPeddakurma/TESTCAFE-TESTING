import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()

// prettier-ignore
fixture `Traffic Results test`
    .page `https://start.duckduckgo.com/traffic`

test('Number of tracffic for a year is equal to sum of tracffic of each month', async t => {
        const expand = Selector('.traffic__year__left')
        .child('h2')
        .withText('2018 Traffic');
        
        var totalTrafficCount = Selector('#content_wrapper').child('div').nth(2).child('div').nth(4).child('div').child('div').nth(1).child('div').nth(2).child('h2').innerText
 
    await t.setTestSpeed(0.01)
    await t.click(expand)
    var i;
    var sum=0;
        for (i = 2; i < 14; i++) {
        sum=sum + Selector('#content_wrapper').child('div').nth(2).child('div').nth(4).child('div').child('div').nth(i).child('div').nth(2).child('h2').innerText
      } 
      console.log(sum)
      if(totalTrafficCount==sum){
          console.log('pass')
      }
      else{
          console.log('fail')
      }
    }
)
    