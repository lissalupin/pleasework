table.add(new MouseMotionAdapter()
{
   public void mouseMoved(MouseEvent e)
   {
      int row = table.rowAtPoint(e.getPoint());
      if (row > -1)
      {
         // easiest way:
         table.clearSelection();
         table.setRowSelectionInterval(row, row);
      }
      else
      {
         table.setSelectionBackground(Color.blue);
      }
   }
});
