const rp = require('request-promise')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')
const { initialValue, props } = require('./initialValue')
const { ID_CONTAINER } = require('./getID')

const checkDataJSON = () => {
    if (fs.existsSync(path.join(__dirname, '../data.json'))) return true
    return false
}

const fetchShipInfo = async () => {
    if (!checkDataJSON()) {
        const options = {
            uri: 'https://azurlane.koumakan.jp/List_of_Ships_by_Stats',
            transform: (body) => cheerio.load(body)
        };

        let data = []

        await rp(options)
            .then(($) => {
                ID_CONTAINER.forEach((CATEGORY_ID) => {
                    let LIST_ID = []
                    $(`${CATEGORY_ID} div[title='Level 120'] tbody tr`).each((i, elem) => {
                        let propIndex = 0
                        let setProp = { ...initialValue }
                        $(elem).children("td").each((i, elemchild) => {
                            if ([0, 2, 3].includes(i)) return;
                            setProp[props[propIndex]] = $(elemchild).text()
                            propIndex++
                        })
                        LIST_ID.push(setProp)
                    })
                    // LIST_ID.splice(0, 1)
                    data.push(LIST_ID)
                })
            })
            .catch(() => { return false });
        fs.writeFileSync(path.join(__dirname, '../data.json'), JSON.stringify(data))
    }
    return true
}

module.exports = {
    fetchShipInfo
}