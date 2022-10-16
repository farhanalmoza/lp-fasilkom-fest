$(document).ready(function() {
    getBidangLomba.loadData = "/bidang-lomba"
    getLomba.loadData = "/lomba"
})

const getBidangLomba = {
    set loadData(data) {
        const URL = URL_DATA + data
        Functions.prototype.getRequest(getBidangLomba, URL);
    },
    set successData(response) {
        const categoryTab = document.getElementById('categoryTab')
        const categoryContent = document.getElementById('categoryContent')

        const bidangLomba = response

        categoryTab.innerHTML = '';
        categoryContent.innerHTML = '';

        for (i = 0; i < bidangLomba.length; i++) {
            const id = `category-${bidangLomba[i].id}-tab`
            categoryTab.innerHTML += `
                <li class="nav-item">
                    <a id="${id}" data-toggle="tab" href="#${id}" role="tab" aria-controls="${id}" aria-selected="true">
                        <h4 class="nav-title">${bidangLomba[i].name}</h4>
                        <span>Category</span>
                    </a>
                </li>
            `;
        }
        document.getElementById('category-1-tab').setAttribute('class', 'active');

        for (i = 0; i < bidangLomba.length; i++) {
            const id = `category-${bidangLomba[i].id}`
            categoryContent.innerHTML += `
                <div class="tab-pane fade" id="${id}" role="tabpanel" aria-labelledby="${id}-tab">
                    <div class="event-content pt-40" id="content-${bidangLomba[i].id}">
                    </div>
                </div>
            `;
        }
        document.getElementById('category-1').setAttribute('class', 'tab-pane fade show active');

        tabCompetition();
    }
}

const getLomba = {
    set loadData(data) {
        const URL = URL_DATA + data
        Functions.prototype.getRequest(getLomba, URL);
    },
    set successData(response) {
        const c1 = document.getElementById(`content-1`)
        const c2 = document.getElementById(`content-2`)
        const c3 = document.getElementById(`content-3`)
        const c4 = document.getElementById(`content-4`)
        // console.log('a')
        c1.innerHTML = ``
        c2.innerHTML = ``
        c3.innerHTML = ``
        c4.innerHTML = ``

        for (i = 0; i < response.length; i++) {
            // change format date to dd, mmmm yyyy
            const start_date = new Date(response[i].start_date)
            const end_date = new Date(response[i].end_date)
            const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            const start_date_format = start_date.getDate() + ' ' + month[start_date.getMonth()] + ' ' + start_date.getFullYear()
            const end_date_format = end_date.getDate() + ' ' + month[end_date.getMonth()] + ' ' + end_date.getFullYear()
            
            if(response[i].id_category == '1') {
                c1.innerHTML += `
                    <div class="single-event d-md-flex mt-30">
                        <div class="event-image">
                            <img src="${ASSET_PICT}/${response[i].pict}" alt="Event">
                        </div>
                        <div class="event-content media-body">
                            <h4 class="event-title">${response[i].name}</h4>
                            <p class="text">${response[i].description}</p>
                            <ul class="event-meta">
                                <li>Start: ${start_date_format}</li>
                                <li>End: ${end_date_format}</li>
                                <br>
                                <li>Location: ${response[i].location}</li>
                            </ul>
                            <a href="${BASE_URL}/daftar-akun/${response[i].role_name}" class="text">Daftar</a>
                        </div>
                    </div>
                `;
            } else if(response[i].id_category == 2) {
                c2.innerHTML += `
                    <div class="single-event d-md-flex mt-30">
                        <div class="event-image">
                            <img src="${ASSET_PICT}/${response[i].pict}" alt="Event">
                        </div>
                        <div class="event-content media-body">
                            <h4 class="event-title">${response[i].name}</h4>
                            <p class="text">${response[i].description}</p>
                            <ul class="event-meta">
                                <li>Start: ${start_date_format}</li>
                                <li>End: ${end_date_format}</li>
                            </ul>
                            <p class="text">Location: ${response[i].location}</p>
                            <a href="${BASE_URL}/daftar/${response[i].role_name}" class="text">Daftar</a>
                        </div>
                    </div>
                `;
            } else if(response[i].id_category == 3) {
                c3.innerHTML += `
                    <div class="single-event d-md-flex mt-30">
                        <div class="event-image">
                            <img src="${ASSET_PICT}/${response[i].pict}" alt="Event">
                        </div>
                        <div class="event-content media-body">
                            <h4 class="event-title">${response[i].name}</h4>
                            <p class="text">${response[i].description}</p>
                            <ul class="event-meta">
                                <li>Start: ${start_date_format}</li>
                                <li>End: ${end_date_format}</li>
                            </ul>
                            <p class="text">Location: ${response[i].location}</p>
                            <a href="${BASE_URL}/daftar/${response[i].role_name}" class="text">Daftar</a>
                        </div>
                    </div>
                `;
            } else if(response[i].id_category == 4) {
                c4.innerHTML += `
                    <div class="single-event d-md-flex mt-30">
                        <div class="event-image">
                            <img src="${ASSET_PICT}/${response[i].pict}" alt="Event">
                        </div>
                        <div class="event-content media-body">
                            <h4 class="event-title">${response[i].name}</h4>
                            <p class="text">${response[i].description}</p>
                            <ul class="event-meta">
                                <li>Start: ${start_date_format}</li>
                                <li>End: ${end_date_format}</li>
                            </ul>
                            <p class="text">Location: ${response[i].location}</p>
                            <a href="${BASE_URL}/daftar/${response[i].role_name}" class="text">Daftar</a>
                        </div>
                    </div>
                `;
            }
        }
    }
}

function tabCompetition() {
    const c1tab = document.getElementById('category-1-tab')
    const c2tab = document.getElementById('category-2-tab')
    const c3tab = document.getElementById('category-3-tab')
    const c4tab = document.getElementById('category-4-tab')

    const c1 = document.getElementById('category-1')
    const c2 = document.getElementById('category-2')
    const c3 = document.getElementById('category-3')
    const c4 = document.getElementById('category-4')

    c1tab.addEventListener('click', function() {
        c1.setAttribute('class', 'tab-pane fade show active')
        c2.setAttribute('class', 'tab-pane fade')
        c3.setAttribute('class', 'tab-pane fade')
        c4.setAttribute('class', 'tab-pane fade')
    })

    c2tab.addEventListener('click', function() {
        c1.setAttribute('class', 'tab-pane fade')
        c2.setAttribute('class', 'tab-pane fade show active')
        c3.setAttribute('class', 'tab-pane fade')
        c4.setAttribute('class', 'tab-pane fade')
    })

    c3tab.addEventListener('click', function() {
        c1.setAttribute('class', 'tab-pane fade')
        c2.setAttribute('class', 'tab-pane fade')
        c3.setAttribute('class', 'tab-pane fade show active')
        c4.setAttribute('class', 'tab-pane fade')
    })

    c4tab.addEventListener('click', function() {
        c1.setAttribute('class', 'tab-pane fade')
        c2.setAttribute('class', 'tab-pane fade')
        c3.setAttribute('class', 'tab-pane fade')
        c4.setAttribute('class', 'tab-pane fade show active')
    })
}