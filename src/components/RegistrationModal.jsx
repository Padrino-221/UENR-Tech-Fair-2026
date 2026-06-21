import { useState, useRef, useEffect } from 'react';
import Cropper from 'cropperjs';
import { motion, AnimatePresence } from 'framer-motion';
import './RegistrationModal.css';

export default function RegistrationModal({ open, onClose }) {
  const [step, setStep] = useState('form');
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', category: '', institution: '', occupation: '' });
  const [croppedBlob, setCroppedBlob] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const cropImageRef = useRef(null);
  const cropperRef = useRef(null);
  const [cropModalOpen, setCropModalOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      /* eslint-disable react-hooks/set-state-in-effect */
      setStep('form');
      setCroppedBlob(null);
      setPreviewUrl(null);
      setForm({ fullName: '', email: '', phone: '', category: '', institution: '', occupation: '' });
      /* eslint-enable react-hooks/set-state-in-effect */
    }
  }, [open]);

  useEffect(() => {
    if (cropModalOpen && previewUrl) {
      const timer = setTimeout(() => {
        const img = cropImageRef.current;
        if (img) {
          if (cropperRef.current) cropperRef.current.destroy();
          const cropper = new Cropper(img, {});
          const sel = cropper.getCropperSelection();
          if (sel) {
            sel.aspectRatio = 1;
            sel.initialCoverage = 1;
          }
          cropperRef.current = cropper;
        }
      }, 250);
      return () => { clearTimeout(timer); if (cropperRef.current) { cropperRef.current.destroy(); cropperRef.current = null; } };
    }
  }, [cropModalOpen, previewUrl]);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
      setCropModalOpen(true);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const applyCrop = async () => {
    if (cropperRef.current) {
      const sel = cropperRef.current.getCropperSelection();
      if (sel) {
        const canvas = await sel.$toCanvas({ width: 300, height: 300 });
        canvas.toBlob((blob) => {
          setCroppedBlob(blob);
          setCropModalOpen(false);
        });
      }
    }
  };

  const cancelCrop = () => {
    setCropModalOpen(false);
    setPreviewUrl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('success');
  };

  const croppedPreview = croppedBlob ? URL.createObjectURL(croppedBlob) : null;

  const loadImg = (src) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

  const downloadCard = async () => {
    const W = 800;
    const H = 1200;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const photoUrl = croppedBlob ? URL.createObjectURL(croppedBlob) : null;
    const [bg, photo] = await Promise.all([
      loadImg('/share-card-bg.jpg'),
      photoUrl ? loadImg(photoUrl) : Promise.resolve(null),
    ]);
    if (photoUrl) URL.revokeObjectURL(photoUrl);

    ctx.drawImage(bg, 0, 0, W, H);

    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 6;

    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.font = '600 22px "Inter", sans-serif';
    ctx.fillText('SCREENSHOT AND SHARE', W / 2, 68);

    if (photo) {
      const photoSize = 350;
      const photoX = (W - photoSize) / 2;
      const photoY = 135;

      ctx.save();
      ctx.beginPath();
      ctx.arc(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(photo, photoX, photoY, photoSize, photoSize);
      ctx.restore();

      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.arc(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2 + 10, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 6;
    ctx.fillStyle = '#fff';
    ctx.font = '700 48px "Clash Display", "Inter", sans-serif';
    ctx.fillText(form.fullName, W / 2, 568);

    ctx.font = '600 20px "Inter", sans-serif';
    ctx.fillText('#UENRTechFair2026', W / 2, 1125);

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'repping-flyer.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div key="main-modal" className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
            <motion.div className="modal-container" initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={onClose}>&times;</button>
              <div className="modal-content">
                {step === 'form' ? (
                  <div className="registration-form-section">
                    <div className="form-header">
                      <h2>UENR Tech Fair 2026</h2>
                      <p>Fill in your details to Get a Flyer</p>
                    </div>
                    <form onSubmit={handleSubmit} className="registration-form">
                      <div className="form-group profile-upload-group">
                        <label>Profile Picture</label>
                        <div className="profile-upload-area" onClick={() => fileInputRef.current?.click()}>
                          <input type="file" ref={fileInputRef} accept="image/*" hidden onChange={handleFile} />
                          {croppedBlob ? (
                            <img src={croppedPreview} alt="Preview" className="profile-preview" />
                          ) : (
                            <div className="upload-placeholder">
                              <i className="fas fa-camera"></i>
                              <span>Click to upload photo</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="fullName">Full Name *</label>
                          <input type="text" id="fullName" placeholder="Enter your full name" required value={form.fullName} onChange={e => setForm(p => ({ ...p, fullName: e.target.value }))} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
                          <input type="email" id="email" placeholder="your.email@example.com" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                        </div>
                      </div>
                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number *</label>
                          <input type="tel" id="phone" placeholder="+233 XX XXX XXXX" required value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="category">I am a *</label>
                          <select id="category" required value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}>
                            <option value="">Select your category</option>
                            <option value="student-it">Student - IT Department</option>
                            <option value="student-other">Student - Other Department</option>
                            <option value="lecturer-staff">Lecturer / Staff</option>
                            <option value="it-enthusiast">IT Enthusiast</option>
                            <option value="partner">Partner / Sponsor</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="institution">Institution / Organization</label>
                          <input type="text" id="institution" placeholder="Your school or company name" value={form.institution} onChange={e => setForm(p => ({ ...p, institution: e.target.value }))} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="occupation">Address</label>
                          <input type="text" id="occupation" placeholder="e.g. Sunyani, Accra, Kumasi" value={form.occupation} onChange={e => setForm(p => ({ ...p, occupation: e.target.value }))} />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary btn-full">Get A Flyer <i className="fas fa-check-circle"></i></button>
                    </form>
                  </div>
                ) : (
                  <div className="success-card-section">
                    <div className="share-card">
                      <div className="share-card-header">
                        <p className="screenshot-text">Screenshot and Share</p>
                      </div>
                      <div className="share-card-body">
                        <div className="participant-photo">
                          <img src={croppedPreview || 'https://via.placeholder.com/120'} alt="Participant" />
                        </div>
                        <div className="participant-name">{form.fullName}</div>
                      </div>
                      <div className="share-card-footer">
                        <p>#UENRTechFair2026</p>
                      </div>
                    </div>
                    <div className="success-card-actions">
                      <button className="btn btn-primary btn-full" onClick={downloadCard}><i className="fas fa-download"></i> Download Flyer</button>
                      <button className="btn btn-outline btn-full" onClick={onClose}>Done</button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cropModalOpen && (
          <motion.div key="crop-modal" className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="modal-container crop-modal-container" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={cancelCrop}>&times;</button>
              <div className="modal-content crop-modal-content">
                <div className="crop-header">
                  <h3>Crop Your Profile Picture</h3>
                  <p>Drag to adjust the square crop area</p>
                </div>
                <div className="crop-container">
                  {previewUrl && <img key={previewUrl} ref={cropImageRef} src={previewUrl} alt="Crop" />}
                </div>
                <div className="crop-actions">
                  <button className="btn btn-outline" onClick={cancelCrop}>Cancel</button>
                  <button className="btn btn-primary" onClick={applyCrop}>Apply Crop <i className="fas fa-check"></i></button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
