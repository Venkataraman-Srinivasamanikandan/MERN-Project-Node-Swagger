/**
* @swagger
* /login:
*  post:
*      tags:
*          - WEB super admin service
*      summary: Super admin login API
*      description: API should login super admin if they provide mandatory datas
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      properties:
*                          email:
*                              type: string
*                          password:
*                              type: string
*                      required:
*                          - email
*                          - password
*                      example:
*                          "email": "test@gmail.com"
*                          "password": "test@123"
*      responses:
*          '200':
*              description: Success response
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/loginResponse'
*                      example:
*                          JWTtoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOnsibmFtZSI6InZlbmthdCIsImVtYWlsIjoidGVzdDIyQGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cDovL2xvY2FsaG9zdDoyMDg3L2ltYWdlcy91c2VyUHJvZmlsZS9wcm9maWxlSW1hZ2VfMTYyNTMzMTg2MjU4My5qcGcifSwiaWF0IjoxNjI1Mzk1MjkyLCJleHAiOjE2MjU0MDYwOTJ9.XEaAUVzRuwPtGuAMJuWqskLBxJ6aXoMCyl_UhvMXep4"
*                          data: {
*                              name: "test",
*                              email: "test@gmail.com"
*                          }
*          '400':
*              description: Invalid parameters, Email doesn't exists, Invalid password
*          '500':
*              description: Internal server error
*
* components:
*  schemas:
*      loginResponse:
*          type: object
*          properties:
*              JWTtoken:
*                  type: string
*              data:
*                  type: object
*                  properties:
*                      name:
*                          type: string
*                      email:
*                          type: string
*/