const React = require('react');

function Barebones(props) {
  return (
    <html>
      <head>
        <meta charset={props.charset || "utf-8"}/>
        {
          props.copyright ?
            <meta name="copyright" content={props.copyright}/>
          :
            undefined
        }
        {
          props.description ?
            <meta name="description" content={props.description}/>
          :
            undefined
        }
        {
          props.keywords ? (props.keywords instanceof Array ?
            <meta name="keywords" content={props.keywords.join(',')}/>
            :
            <meta name="keywords" content={props.keywords}/>
          )
          :
            undefined
        }
        <title>{props.title || "Untitled page"}</title>
      </head>
    </html>
  );
}

module.exports = Barebones;

