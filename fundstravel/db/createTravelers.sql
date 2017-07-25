insert into travelers (email, password) Values ($1, $2, $3)
returning *;