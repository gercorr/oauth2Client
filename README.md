# oauth2Client

## update index.html vars clientId and redirectUri.

## Update apache settings to point at oauth2 (Cloud Foundry UAA) e.g. Ubuntu apache:
### Install modules:
``
sudo a2enmod proxy && sudo a2enmod proxy_http && sudo a2enmod proxy_ajp && sudo a2enmod rewrite && sudo a2enmod deflate && sudo a2enmod headers && sudo a2enmod proxy_balancer && sudo a2enmod proxy_connect && sudo a2enmod proxy_html
``

### Update apache Settings:
```
sudo vim /etc/apache2/apache2.conf
sudo systemctl restart apache2
```

## Run oauth2Client:
```
npm install
nodejs app.js
```


## Example Apache Proxy Settings:
```
<Proxy *>
        Order allow,deny
        Allow from all
</Proxy>
ProxyPass /node http://localhost:3000

ProxyRequests Off
ProxyPass /uaa http://uaa-server.azurewebsites.net/uaa

    <Location /uaa>
        ProxyPassReverse /uaa
        Options FollowSymLinks
        Require all granted
    </Location>
 ```
