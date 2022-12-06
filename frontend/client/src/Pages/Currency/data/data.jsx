import gbp from '../Assets/currency/gbp.png'
import gel from '../Assets/currency/gel.png'
import ggp from '../Assets/currency/ggp.png'
import ghs from '../Assets/currency/ghs.png'
import gnf from '../Assets/currency/gnf.png'
import gip from '../Assets/currency/gip.png'
import gmd from '../Assets/currency/gmd.png'
import gtq from '../Assets/currency/gtq.png'
import gab from '../Assets/currency/gab.png'
import grc from '../Assets/currency/grc.png'
import gtm from '../Assets/currency/gtm.png'
import gnb from '../Assets/currency/gnb.png'
import eur from '../Assets/popular/eur.png'
import cad from '../Assets/popular/cad.png'
import jpy from '../Assets/popular/jpy.png'
import usd from '../Assets/popular/usd.png'
import aud from '../Assets/popular/aud.png'
import arg from '../Assets/rates/arg.png'
import eth from '../Assets/rates/eth.png'
import lbn from '../Assets/rates/lbn.png'
import lyb from '../Assets/rates/lyb.png'
import ngn from '../Assets/rates/ngn.png'
import zim from '../Assets/rates/zim.png'
import dollar from '../Assets/dollar.png'
import cent from '../Assets/cent.png'

export const alphabets = [
    {id: 1, letter: 'A'},
    {id: 2, letter: 'B'},
    {id: 3, letter: 'C'},
    {id: 4, letter: 'D'},
    {id: 5, letter: 'E'},
    {id: 6, letter: 'F'},
    {id: 7, letter: 'G'},
    {id: 8, letter: 'H'},
    {id: 9, letter: 'I'},
    {id: 10, letter: 'J'},
    {id: 11, letter: 'K'},
    {id: 12, letter: 'L'},
    {id: 13, letter: 'M'},
    {id: 14, letter: 'N'},
    {id: 15, letter: 'O'},
    {id: 16, letter: 'P'},
    {id: 17, letter: 'Q'},
    {id: 18, letter: 'R'},
    {id: 19, letter: 'S'},
    {id: 20, letter: 'T'},
    {id: 21, letter: 'U'},
    {id: 22, letter: 'V'},
    {id: 23, letter: 'W'},
    {id: 24, letter: 'X'},
    {id: 25, letter: 'Y'},
    {id: 26, letter: 'Z'},
]

export const currency = [
    {id: 1, g: 'GBP', currency:'British Pound', image: gbp},
    {id: 2, g: 'GEL', currency:'Georgian Lari', image: gel},
    {id: 3, g: 'GGP', currency:'Guernsey Pound', image: ggp},
    {id: 4, g: 'GHS', currency:'Ghanian Cedi', image: ghs},
    {id: 5, g: 'GNF', currency:'Guinean Franc', image: gnf},
    {id: 6, g: 'GIP', currency:'Gibraltar Pound', image: gip},
    {id: 7, g: 'GMD', currency:'Gambian Dalasi', image: gmd},
    {id: 8, g: 'GTQ', currency:'Guatemalan Quetzai', image: gtq},
    {id: 9, g: 'GAB', currency:'Gabonese Franc', image: gab},
    {id: 10, g: 'GRC', currency:'Greece', image: grc},
    {id: 11, g: 'GTM', currency:'Guatemala', image: gtm},
    {id: 12, g: 'GNB', currency:'Guinea Bissau', image: gnb},
]


export const exchange = [
    {id: 1, g: 'GBP', currency:'British Pound', image: gbp},
    {id: 2, g: 'EUR', currency:'Euro', image: eur},
    {id: 3, g: 'CAD', currency:'Canadian Dollar', image: cad},
    {id: 4, g: 'JPY', currency:'Japanese Yen', image: jpy},
    {id: 5, g: 'USD', currency:'US Dollar', image: usd},
    {id: 6, g: 'AUD', currency:'Australian Dollar', image: aud},
]

export const rates = [
    {id: 1, f: 'USD', g: 'ZIM', rate: '860', unit: 'ZWL', image: zim, img: usd},
    {id: 2, f: 'USD', g: 'LBN', rate: '39,500', unit: 'LBP', image: lbn, img: usd},
    {id: 3, f: 'USD', g: 'LYB', rate: '5.23', unit: 'LYD', image: lyb, img: usd},
    {id: 4, f: 'USD', g: 'ARG', rate: '292', unit: 'ARG', image: arg, img: usd},
    {id: 5, f: 'USD', g: 'ETH', rate: '95', unit: 'ETH', image: eth, img: usd},
    {id: 6, f: 'USD', g: 'NGN', rate: '820', unit: 'NGN', image: ngn, img: usd},
]

export const stat = [
    {id:1, title: 'Currency', value: 'Stat'},
    {id:2, title: 'Name', value: 'Canadian Dollar'},
    {id:3, title: 'Symbol', value: dollar},
    {id:4, title: 'Minor Unit Symbol', value: cent},
    {id:5, title: 'Minor Unit', value: '1/100=cent'},
    {id:6, title: 'Currency', value: 'CAD to USD Chart'},
    {id:7, title: 'Top CAD Conversion', value: 'CAD to USD'},
]