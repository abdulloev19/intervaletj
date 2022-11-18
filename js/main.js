let alldata = {
  filter: true,
  reports: true,
  alltranslations: false,
  payments: false,
  perevod1: false,
  perevod2: false,
  perevod3: false,
  perevod4: false,
  transactioncomp: false
}

let filter_reports = {
    data() {
        return alldata
    },
    template: `
    <div
    id="dropdown"
    :class="{active: filter}"
    @click="filter = !filter"
    class="content_reports_filter_top"
  >
    <h3>Фильтр</h3>
  </div>
  <div v-show="filter" class="content_reports_filter_main">
    <div class="filter_top">
      <span>Настройки</span>
    </div>
    <div class="items">
      <div class="item1">
        <div>
          <span>Период</span>
          <p>День</p>
        </div>
        <div>
          <span>Выберите</span>
          <p>Текущий</p>
        </div>
      </div>
      <div class="item2">
        <div>
          <span>Состояние транзакции</span>
          <p>Все</p>
        </div>
        <div>
          <span>Портал</span>
          <p>Все</p>
        </div>
        <div>
          <span>Тип транзакции</span>
          <p>Все</p>
        </div>
      </div>
      <div class="item3">
        <div>
          <span>Валюта</span>
          <p>Все</p>
        </div>
      </div>
    </div>

    <div class="filter_bottom">
      <button>Создать отчет</button>
      <button>Сбросить фильтр</button>
    </div>
    `
}
let filter_transaction = {
    data() {
        return alldata
    },
    template: `
    <div
    id="dropdown"
    :class="{active: filter}"
    @click="filter = !filter"
    class="content_reports_filter_top"
  >
    <h3>Фильтр</h3>
  </div>
  <div v-show="filter" class="content_reports_filter_main">
    <div class="filter_top">
      <span>Настройки</span>
    </div>
    <div class="items">
      <div class="item1">
        <div>
          <span>Период</span>
          <p>День</p>
        </div>
        <div>
          <span>Выберите</span>
          <p>Текущий</p>
        </div>
      </div>
      <div class="item2">
        <div>
          <span>Состояние транзакции</span>
          <p>Все</p>
        </div>
        <div>
          <span>Валюта</span>
          <p>Все</p>
        </div>
      </div>
    </div>

    <div class="filter_bottom">
      <button>Применить</button>
      <button>Сбросить фильтр</button>
    </div>
    `
}

let reports = {
  data() {
    return alldata
  },
  template: `
  <div v-show="reports" class="content_reports">
  <div class="content_reports_header_top">
    <span>/Отчеты</span>
    <h2>Отчеты</h2>
  </div>
  <div class="content_reports_filter">
    <filter-main></filter-main>

  </div>
  <div class="listofreports">
    <div class="listofreports_top">
      <span>Список отчетов</span>
      <span>↻ Обновить</span>
    </div>
    <div class="listofreports_main">
      <table>
          <thead><tr>
              <td>Token</td>
              <td>Время создания</td>
              <td>Дата начала отчета</td>
              <td>Дата завершения отчета</td>
              <td>отчет по порталу</td>
              <td>тип транзакции</td>
              <td>Состояние транзакции</td>
              <td>Состояние</td>
              <td>действие</td>
          </tr></thead>
          <tbody>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>31.12.2021 22:22:22</td>
                  <td>31.12.2021 22:22:22</td>
                  <td>Все</td>
                  <td>Платежи. Переводы с карты на карту</td>
                  <td>Успешно</td>
                  <td><span id="blue">Сформирован</span></td>
                  <td> <span><img src="img/352275_cloud_download_icon.svg" alt="cloud"></span> <span><?xml version="1.0" ?><svg height="20" viewBox="0 0 48 48" width="20" fill="#ff0000" xmlns="http://www.w3.org/2000/svg"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg> </span></td>
              </tr>
          </tbody>
      </table>
    </div>
    <div class="listofreports_footer">
      <div class="listofreports_footer_left">
          <span>&#8810;</span>
          <span>&#8249;</span>
          <span>1</span>
          <span>&#8250;</span>
          <span>&#8811;</span>
      </div>
      <div class="listofreports_footer_right">
          <div>
              <span>Размер страницы</span>
              <p>10</p>
            </div>
      </div>
    </div>
  </div>
</div>
  `,
  components: {
    "filter-main": filter_reports
}
}

let transaction = {
  data() {
    return alldata
  },
  template: `
  <div v-show="transactioncomp" class="content_reports">
  <div class="content_reports_header_top">
    <span>/Все переводы/Транзакции</span>
    <h2>Все переводы</h2>
  </div>
  <div class="content_reports_filter">
    <filter-main></filter-main>
  </div>
  <div class="listofreports">
    <div class="listofreports_top">
      <span>Список транзакций</span>
      <span>Настройки</span>
    </div>
    <div class="listofreports_main">
      <table>
          <thead><tr>
              <td>Token</td>
              <td>Дата и время</td>
              <td>Клиент</td>
              <td>Сумма перевода</td>
              <td>Комиссия</td>
              <td>Сумма списания</td>
              <td>Идентификатор платежа</td>
              <td>Портал</td>
              <td>Код завершения</td>
              <td>Состояние</td>
          </tr></thead>
          <tbody>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>812390479238</td>
                  <td>2 000.00 RUB</td>
                  <td>20.00 RUB</td>
                  <td>2 000.00 RUB</td>
                  <td>C2C_IBT</td>
                  <td>ANDROID_IBT</td>
                  <td>OK</td>
                  <td><span id="blue">Успешно</span></td>
              </tr>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>812390479238</td>
                  <td>2 000.00 RUB</td>
                  <td>20.00 RUB</td>
                  <td>2 000.00 RUB</td>
                  <td>C2C_IBT</td>
                  <td>ANDROID_IBT</td>
                  <td>OK</td>
                  <td><span id="yellow">Отменено</span></td>
              </tr>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>812390479238</td>
                  <td>2 000.00 RUB</td>
                  <td>20.00 RUB</td>
                  <td>2 000.00 RUB</td>
                  <td>C2C_IBT</td>
                  <td>ANDROID_IBT</td>
                  <td>OK</td>
                  <td><span id="red">Ошибка</span></td>
              </tr>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>812390479238</td>
                  <td>2 000.00 RUB</td>
                  <td>20.00 RUB</td>
                  <td>2 000.00 RUB</td>
                  <td>C2C_IBT</td>
                  <td>ANDROID_IBT</td>
                  <td>OK</td>
                  <td><span id="blue">Успешно</span></td>
              </tr>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>812390479238</td>
                  <td>2 000.00 RUB</td>
                  <td>20.00 RUB</td>
                  <td>2 000.00 RUB</td>
                  <td>C2C_IBT</td>
                  <td>ANDROID_IBT</td>
                  <td>OK</td>
                  <td><span id="blue">Успешно</span></td>
              </tr>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>812390479238</td>
                  <td>2 000.00 RUB</td>
                  <td>20.00 RUB</td>
                  <td>2 000.00 RUB</td>
                  <td>C2C_IBT</td>
                  <td>ANDROID_IBT</td>
                  <td>OK</td>
                  <td><span id="blue">Успешно</span></td>
              </tr>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>812390479238</td>
                  <td>2 000.00 RUB</td>
                  <td>20.00 RUB</td>
                  <td>2 000.00 RUB</td>
                  <td>C2C_IBT</td>
                  <td>ANDROID_IBT</td>
                  <td>OK</td>
                  <td><span id="blue">Успешно</span></td>
              </tr>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>812390479238</td>
                  <td>2 000.00 RUB</td>
                  <td>20.00 RUB</td>
                  <td>2 000.00 RUB</td>
                  <td>C2C_IBT</td>
                  <td>ANDROID_IBT</td>
                  <td>OK</td>
                  <td><span id="blue">Успешно</span></td>
              </tr>
              <tr>
                  <td>2XOVI94HET</td>
                  <td>17.11.2022 10:57:11</td>
                  <td>812390479238</td>
                  <td>2 000.00 RUB</td>
                  <td>20.00 RUB</td>
                  <td>2 000.00 RUB</td>
                  <td>C2C_IBT</td>
                  <td>ANDROID_IBT</td>
                  <td>OK</td>
                  <td><span id="yellow">Успешно</span></td>
              </tr>
          </tbody>
      </table>
    </div>
    <div class="listofreports_footer">
      <div class="listofreports_footer_left">
          <span>&#8810;</span>
          <span>&#8249;</span>
          <span>1</span>
          <span>&#8250;</span>
          <span>&#8811;</span>
      </div>
      <div class="listofreports_footer_right">
          <div>
              <span>Размер страницы</span>
              <p>10</p>
            </div>
      </div>
    </div>
  </div>
</div>
  `,
  components: {
    "filter-main": filter_transaction
}
}


const abdulloev = Vue.createApp({
    data () {
        return alldata
    },
    methods: {

    },
    components: {
        "reports-main": reports,
        "transaction-main": transaction
    }
}).mount("#abdulloev")


{/* <filter></filter> */}