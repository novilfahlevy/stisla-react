import React from 'react';

import ProfileImage from './../../assets/img/avatar/avatar-1.png';

class Profile extends React.Component {
  render() {
    return (
      <div className="col-12">
        <div className="row mt-sm-4">
          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <form action="/" method="post">
                    <div className="card-header">
                      <h4>Ubah Informasi Profil</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="form-group col-12">
                          <label htmlFor="name">Nama</label>
                          <input type="text" name="name" id="name" className="form-control" value="Novil Fahlevy" />
                          {/* <span className="invalid-feedback d-block" role="alert">
                            <strong></strong>
                          </span> */}
                        </div>
                        <div className="form-group mb-0 col-12">
                          <label htmlFor="email">Email</label>
                          <input type="text" name="email" id="email" className="form-control" value="novilfreon@gmail.com" />
                          {/* <span className="invalid-feedback d-block" role="alert">
                            <strong></strong>
                          </span> */}
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Ganti Password</h4>
                  </div>
                  <form action="/" method="POST">
                    <div className="card-body">
                      <div className="row">
                        <div className="form-group col-12">
                          <label htmlFor="oldPassword">Password Lama</label>
                          <input type="password" className="form-control" name="oldPassword" id="password" />
                          {/* <span className="invalid-feedback d-block" role="alert">
                            <strong></strong>
                          </span> */}
                          {/* <span className="invalid-feedback d-block" role="alert">
                            <strong></strong>
                          </span> */}
                        </div>
                        <div className="form-group col-12">
                          <label htmlFor="password">Password Baru</label>
                          <input type="password" className="form-control" name="password" id="newPassword" />
                          {/* <span className="invalid-feedback d-block" role="alert">
                            <strong></strong>
                          </span> */}
                        </div>
                        <div className="form-group mb-0 col-12">
                          <label htmlFor="password_confirmation">Konfirmasi Password Baru</label>
                          <input type="password" className="form-control" name="password_confirmation" id="password_confirmation" />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <div className="card profile-widget mt-0">
              <div className="card-header">
                <h4>Ubah Gambar Profil</h4>
              </div>
              <form action="/" method="POST" encType="multipart/form-data" id="changeProfileImageForm">
                <div className="card-body d-flex justify-content-center">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <img alt="profile" src={ProfileImage} className="rounded-circle ml-0 shadow" style={{'width': '150px', 'height': '150px', 'backgroundSize': 'cover'}} />
                    </div>
                    <div className="col-12 py-0">
                      <hr className="my-4" />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <label className="rounded-circle d-flex justify-content-center align-items-center" style={{'width': '200px', 'height': '200px', 'border': '2px dashed #6777ef', 'cursor': 'pointer'}} id="profileImage" htmlFor="image">
                        <div id="dropArea">
                          <div className="m-0 pt-3 text-break">
                            <h6 className="mb-0">Pilih gambar profil</h6>
                            <p className="mb-0 text-center">500 &times; 500</p>
                          </div>
                        </div>
                        <input type="file" name="image" className="d-none" id="image" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;