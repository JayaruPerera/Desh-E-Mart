import mongoose from 'mongoose';

const shopStatusSchema = new mongoose.Schema({
  isOpen: {
    type: Boolean,
    required: true,
    default: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Check if the model already exists before creating a new one
const ShopStatus = mongoose.models.ShopStatus || mongoose.model('ShopStatus', shopStatusSchema);

export default ShopStatus;