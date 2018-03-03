const options = {
  page: 1,
  sizePerPageList: [ {
       text: '5', value: 5
     }, {
       text: '10', value: 10
     }, {
       text: '20', value: 20
     } ],
     sizePerPage: 10,  // which size per page you want to locate as default
     pageStartIndex: 0, // where to start counting the pages
     paginationSize: 10,  // the pagination bar size.
     prePage: 'Prev', // Previous page button text
     nextPage: 'Next', // Next page button text
     firstPage: 'First', // First page button text
     lastPage: 'Last' // Last page button text

};

export default options;