## Laravel serverless deployment with AWS Lambda and API Gateway using Bref

This is a simple example of how to deploy a Laravel application to AWS Lambda using Bref. This example is based on the official [Bref documentation](https://bref.sh/docs/frameworks/laravel.html).

### Requirements
- PHP 8.2
- Composer
- Serverless Framework
- AWS account

### Installation
1. Clone this repository
2. Run `composer install`
3. Run `php artisan key:generate`
4. Set up your database connection in the `.env` file (you can use a free MySQL database for test [Free SQL Database](https://www.freesqldatabase.com/))
5. Run `php artisan migrate`
6. Run `php artisan db:seed`
7. Run `npm run build` to build the frontend assets
8. Set up your AWS credentials in the `~/.aws/credentials` file
9. Run `serverless deploy`

### Usage
After deploying the application, you will get an endpoint that you can use to access the application.

Users default credentials:
- Email: `admin@admin.com`
- Password: `password`
- Role: `admin`
--------------------------
- Email: `editor@edit.com`
- Password: `password`
- Role: `editor`

### License
This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

